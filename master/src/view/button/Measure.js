/* Copyright (c) 2015-present terrestris GmbH & Co. KG
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * A measure tool button.
 *
 * Mainly influenced by ol examples.
 *
 * @class BasiGX.view.button.Measure
 */
Ext.define('BasiGX.view.button.Measure', {
    extend: 'BasiGX.view.button.Base',
    xtype: 'basigx-button-measure',

    requires: [
        'BasiGX.util.Layer',
        'BasiGX.util.Map',
        'Ext.app.ViewModel'
    ],

    /**
     *
     */
    viewModel: {
        data: {
            textline: 'Strecke messen',
            textpoly: 'Fläche messen',
            textangle: 'Winkel messen',
            tooltipLine: 'Strecke messen',
            tooltipPoly: 'Fläche messen',
            tooltipAngle: 'Winkel messen',
            continuePolygonMsg: 'Klicken zum Zeichnen der Fläche',
            continueLineMsg: 'Klicken zum Zeichnen der Strecke',
            continueAngleMsg: 'Klicken zum Zeichnen des Winkels',
            clickToDrawText: 'Klicken zum Messen',
            documentation: '<h2>Messwerkzeug</h2>• Ein Klick auf den Button ' +
                'aktiviert das Messwerkzeug.<br>• Klicken Sie anschließend ' +
                'mit der Maus in der Karte, um einen Messpunkt zu ' +
                'erstellen.<br>• Wiederholen Sie den Vorgang mit beliebig ' +
                'vielen Messpunkten.<br>• Um den Messvorgang abzuschließen ' +
                'führen Sie einen Doppelklick aus.<br>• Das Messergebnis ' +
                'wird ihnen in der Karte angezeigt.'
        }
    },

    /**
     *
     */
    enableToggle: true,

    /**
     *
     */
    measureVectorLayer: null,

    /**
     *
     */
    drawAction: null,

    /**
     *
     */
    geodesic: true,

    /**
     *
     */
    measureType: 'line',

    /**
     * Currently drawn feature.
     *
     * @type {ol.Feature}
     */
    sketch: null,

    /**
     * The help tooltip element.
     *
     * @type {Element}
     */
    helpTooltipElement: null,

    /**
     * Overlay to show the help messages.
     *
     * @type {ol.Overlay}
     */
    helpTooltip: null,

    /**
     * The measure tooltip element.
     *
     * @type {Element}
     */
    measureTooltipElement: null,

    /**
     * Overlay to show the measurement.
     *
     * @type {ol.Overlay}
     */
    measureTooltip: null,

    /**
     * Used to allow / disallow multiple drawings at a time on the map
     */
    allowOnlyOneDrawing: true,

    /**
     *
     */
    strokeColor: 'rgba(255, 0, 0, 0.8)',

    /**
     *
     */
    fillColor: 'rgba(255, 0, 0, 0.5)',

    /**
     * how many decimal places will be allowed for the measure tooltips
     */
    decimalPlacesInToolTips: 2,

    /**
     * Determine if a area / line greater than 10000 should be switched to km
     * instead of m in popups.
     */
    switchToKmOnLargeValues: true,

    /**
     * Determines if a marker with current measurement should be shown every
     * time the user clicks while drawing
     */
    showMeasureInfoOnClickedPoints: false,

    /**
     * An object holding keyed `ol.EventsKey` instances returned by the `on`
     * method of `ol.Observable`. These keys are used to unbind temporary
     * listeners on events of the `ol.interaction.Draw` or `ol.Map`. The keys
     * are the names of the events on the various objects. The `click` key is
     * not always bound, but only for certain #measureType values.
     *
     * In #cleanUp, we unbind all events we have bound so as to not leak
     * memory, and to ensure we have no concurring listeners being active at a
     * time (E.g. when multiple measure buttons are in an application).
     *
     * @type {Object}
     */
    eventKeys: {
        drawstart: null,
        drawend: null,
        pointermove: null,
        click: null
    },

    /**
     * An array of created divs we use for the tooltips. Used to eventually
     * clean up everything we added.
     *
     * @type{Array<HTMLDivElement>}
     */
    createdTooltipDivs: [],

    /**
     * An array of created overlays we use for the tooltips. Used to eventually
     * clean up everything we added.
     *
     * @type{Array<ol.Overlay>}
     */
    createdTooltipOverlays: [],

    statics: {

        /**
         * CSS classes we'll assign to the popups from measuring. use these to
         * style the text of the popups / overlays.
         */
        CSS_CLASSES: {

            /**
             * Every tooltip will have these classes. The unprefixed 'tooltip'
             * is kept for backwards compatibility only and should not be used
             * anymore for styling.
             */
            TOOLTIP: 'basigx-measure-tooltip tooltip',

            /**
             * Measurement tooltips with the everchanging values will have these
             * classes. The unprefixed 'tooltip-measure' is kept for backwards
             * compatibility only and should not be used anymore for styling.
             */
            TOOLTIP_DYNAMIC: 'basigx-measure-tooltip-dynamic tooltip-measure',

            /**
             * The tooltips for finished measurements will have these classes.
             * The unprefixed 'tooltip-static' is kept for backwards
             * compatibility only and should not be used anymore for styling.
             */
            TOOLTIP_STATIC: 'basigx-measure-tooltip-static tooltip-static',

            /**
             * A utility method that turns the passed space separated CSS class
             * names into a selector.
             *
             *     BasiGX.view.button.Measure.CSS_CLASSES.toSelector('foo bar');
             *     // returns '.foo.bar'
             *
             * @param {String} classStr The space separated names of classes.
             * @return {String} A selector that can be used to query the DOM.
             */
            toSelector: function(classStr) {
                if (!classStr) {
                    Ext.raise('Cannot convert "' + classStr + '" to selector.');
                }
                var dot = '.';
                var space = ' ';
                var trimmed = classStr
                    .replace(/^\s+/, '') // leading whitespace
                    .replace(/\s+$/, '') // trailing whitespace
                    .replace(/\s+/g, space); // multiple spaces to one
                return dot + trimmed.split(space).join(dot);
            }
        }
    },

    /**
     *
     */
    constructor: function() {
        var me = this;
        var LayerUtil = BasiGX.util.Layer;

        me.onDrawInteractionActiveChange
          = me.onDrawInteractionActiveChange.bind(me);
        me.callParent(arguments);

        me.map = BasiGX.util.Map.getMapComponent().getMap();

        var btnText = me.btnTextByType();
        var btnTooltip = me.btnTooltipByType();
        me.setBind({
            text: btnText,
            tooltip: btnTooltip
        });

        var nameMeasureLayer = LayerUtil.NAME_MEASURE_LAYER;
        var measureLayer = LayerUtil.getLayerByName(nameMeasureLayer);

        if (Ext.isEmpty(measureLayer)) {
            measureLayer = me.createMeasureLayer();
            measureLayer.set('bp_displayInLayerSwitcher', false);
            me.map.addLayer(measureLayer);
        }

        me.measureVectorLayer = measureLayer;

        me.drawAction = me.drawInteractionByMeasureType();
        me.drawAction.on('change:active', me.onDrawInteractionActiveChange);

        me.drawAction.setActive(false);
        me.map.addInteraction(me.drawAction);

        me.on('toggle', me.onBtnToggle, me);
    },

    /**
     *
     */
    onDrawInteractionActiveChange: function() {
        var me = this;
        if (me.drawAction.getActive()) {
            me.createHelpTooltip();
            me.createMeasureTooltip();
        } else {
            me.removeHelpTooltip();
            me.removeMeasureTooltip();
        }
    },

    /**
     * Called when the button is toggled, this method ensures that everything
     * is cleaned up when unpressed, and that measuring can start when pressed.
     *
     * @param {Ext.Button} btn The measure button itself.
     * @param {Boolean} pressed Whether the button is now pressed or not.
     */
    onBtnToggle: function(btn, pressed) {
        btn.cleanUp();
        if (pressed) {
            btn.drawAction.setActive(true);
            btn.eventKeys.drawstart = btn.drawAction.on(
                'drawstart', btn.drawStart.bind(btn)
            );
            btn.eventKeys.drawend = btn.drawAction.on(
                'drawend', btn.drawEnd.bind(btn)
            );
            var throttledPointerMove = Ext.Function.createThrottled(
                btn.pointerMoveHandler, 50, btn
            );
            btn.eventKeys.pointermove = btn.map.on(
                'pointermove', throttledPointerMove
            );
        }
    },

    /**
     * Creates a correctly configured OpenLayers draw interaction depending on
     * the configured #measureType.
     *
     * @return {ol.interaction.Draw} The created interaction, which is not yet
     *     added to the map.
     */
    drawInteractionByMeasureType: function() {
        var me = this;
        var drawType = me.drawTypeByMeasureType();
        var maxPoints = me.measureType === 'angle' ? 2 : undefined;
        var interaction = new ol.interaction.Draw({
            name: 'drawaction',
            source: me.measureVectorLayer.getSource(),
            type: drawType,
            maxPoints: maxPoints,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: me.fillColor
                }),
                stroke: new ol.style.Stroke({
                    color: me.strokeColor,
                    lineDash: [10, 10],
                    width: 2
                }),
                image: new ol.style.Circle({
                    radius: 5,
                    stroke: new ol.style.Stroke({
                        color: me.strokeColor
                    }),
                    fill: new ol.style.Fill({
                        color: me.fillColor
                    })
                })
            }),
            freehandCondition: function() {
                return false;
            }
        });
        return interaction;
    },

    /**
     * Creates a correctly setup vector layer on which the draw interaction will
     * work.
     *
     * @return {ol.layer.Vector} The layer on which the draw interaction will
     *     work.
     */
    createMeasureLayer: function() {
        var me = this;
        var LayerUtil = BasiGX.util.Layer;
        var nameMeasureLayer = LayerUtil.NAME_MEASURE_LAYER;
        var noLayerSwitcherKey = LayerUtil.KEY_DISPLAY_IN_LAYERSWITCHER;

        var measureLayer = new ol.layer.Vector({
            name: nameMeasureLayer,
            source: new ol.source.Vector({
                features: new ol.Collection()
            }),
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: me.fillColor
                }),
                stroke: new ol.style.Stroke({
                    color: me.strokeColor,
                    width: 2
                }),
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({
                        color: me.fillColor
                    })
                })
            })
        });
        // Set our internal flag to filter this layer out of the tree / legend
        measureLayer.set(noLayerSwitcherKey, false);

        return measureLayer;
    },

    /**
     * Examines the #measureType property of the this button an returns the
     * type to use for drawing vectors, either `'MultiLineString'` or
     * `'MultiPolygon'`.
     *
     * @return {String} The type to draw.
     */
    drawTypeByMeasureType: function() {
        var drawType = 'MultiLineString';
        if (this.measureType === 'polygon') {
            drawType = 'MultiPolygon';
        }
        return drawType;
    },

    /**
     * Determines a viewmodel template to use for button texts depending on the
     * configured #measureType.
     *
     * @return {String} The viewmodel template to use.
     */
    btnTextByType: function() {
        var btnText;
        switch (this.measureType) {
            case 'line':
                btnText = '{textline}';
                break;
            case 'polygon':
                btnText = '{textpoly}';
                break;
            case 'angle':
                btnText = '{textangle}';
                break;
            default:
                break;
        }
        return btnText;
    },

    /**
     * Determines a viewmodel template to use for button btnTooltips depending
     * on the configured #measureType.
     *
     * @return {String} The viewmodel template to use.
     */
    btnTooltipByType: function() {
        var btnTooltip;
        switch (this.measureType) {
            case 'line':
                btnTooltip = '{tooltipLine}';
                break;
            case 'polygon':
                btnTooltip = '{tooltipPoly}';
                break;
            case 'angle':
                btnTooltip = '{tooltipAngle}';
                break;
            default:
                break;
        }
        return btnTooltip;
    },

    /**
     * Cleans up artifacts from measuring when the button is unpressed.
     */
    cleanUp: function() {
        var me = this;
        me.drawAction.setActive(false);
        Ext.iterate(me.eventKeys, function(key, eventKey) {
            if (eventKey) {
                ol.Observable.unByKey(eventKey);
            }
        });
        me.eventKeys = {};
        me.cleanUpToolTips();
        me.measureVectorLayer.getSource().clear();
    },

    /**
     * Cleans up tooltips when the button is unpressed.
     */
    cleanUpToolTips: function() {
        var me = this;

        Ext.each(me.createdTooltipOverlays, function(tooltipOverlay) {
            me.map.removeOverlay(tooltipOverlay);
        });
        me.createdTooltipOverlays = [];

        Ext.each(me.createdTooltipDivs, function(tooltipDiv) {
            var parent = tooltipDiv && tooltipDiv.parentNode;
            if (parent) {
                parent.removeChild(tooltipDiv);
            }
        });
        me.createdTooltipDivs = [];
    },

    /**
     * Adds a tooltip on click where a measuring stop occured.
     *
     * @param {ol.MapBrowserEvent} evt The event which contains the coordinate
     *     for the tooltip.
     */
    addMeasureStopToolTip: function(evt) {
        var me = this;
        var CSS = BasiGX.view.button.Measure.CSS_CLASSES;

        if (!Ext.isEmpty(me.sketch)) {
            var geom = me.sketch.getGeometry();
            var value = me.measureType === 'line' ? me.formatLength(geom) :
                me.formatArea(geom);
            if (parseInt(value, 10) > 0) {
                var div = Ext.dom.Helper.createDom('<div>');
                div.className = CSS.TOOLTIP + ' ' + CSS.TOOLTIP_STATIC;
                div.innerHTML = value;
                var tooltip = new ol.Overlay({
                    element: div,
                    offset: [0, -15],
                    positioning: 'bottom-center'
                });
                me.map.addOverlay(tooltip);
                tooltip.setPosition(evt.coordinate);

                me.createdTooltipDivs.push(div);
                me.createdTooltipOverlays.push(tooltip);
            }
        }
    },

    /**
     * Sets up listeners whenever the drawing of a measurement sketch is
     * started.
     *
     * @param {ol.interaction.Draw.Event} evt The event which contains the
     *     feature we are drawing.
     */
    drawStart: function(evt) {
        var me = this;
        var source = me.measureVectorLayer.getSource();
        me.sketch = evt.feature;

        if (me.showMeasureInfoOnClickedPoints && me.measureType === 'line') {
            me.eventKeys.click = me.map.on(
                'click', me.addMeasureStopToolTip.bind(me)
            );
        }

        if (me.allowOnlyOneDrawing && source.getFeatures().length > 0) {
            me.cleanUpToolTips();
            me.createMeasureTooltip();
            me.createHelpTooltip();
            source.clear();
        }
    },

    /**
     * Called whenever measuring stops, this method draws static tooltips with
     * the result onto the map canvas and unregisters various listeners.
     *
     * TODO We should remove the commented code.
     */
    drawEnd: function() {
        var me = this;

        if (me.eventKeys.click) {
            ol.Observable.unByKey(me.eventKeys.click);
        }

        // Fix doubled label for lastPoint of line
        var CSS = BasiGX.view.button.Measure.CSS_CLASSES;
        if (me.showMeasureInfoOnClickedPoints && me.measureType === 'line') {
            me.removeMeasureTooltip();
        } else {
            me.measureTooltipElement.className = CSS.TOOLTIP +
                ' ' + CSS.TOOLTIP_STATIC;
            me.measureTooltip.setOffset([0, -7]);
        }

        // unset sketch
        me.sketch = null;

        // Fix doubled label for lastPoint of line
        if (me.showMeasureInfoOnClickedPoints && me.measureType === 'line') {
            me.measureTooltipElement = null;
            me.createMeasureTooltip();
        }
    },

    /**
     * Handle pointer move by updating and repositioning the dynamic tooltip.
     *
     * @param {ol.MapBrowserEvent} evt The event from the pointermove.
     */
    pointerMoveHandler: function(evt) {
        var me = this;

        if (evt.dragging) {
            return;
        }

        if (!me.helpTooltipElement || !me.measureTooltipElement) {
            return;
        }

        var helpMsg = me.getViewModel().get('clickToDrawText');
        var helpTooltipCoord = evt.coordinate;
        var measureTooltipCoord = evt.coordinate;

        var measureType = me.measureType;

        if (me.sketch) {
            var output;
            var geom = me.sketch.getGeometry();
            measureTooltipCoord = geom.getLastCoordinate();
            if (measureType === 'polygon') {
                output = me.formatArea(geom);
                helpMsg = me.getViewModel().get('continuePolygonMsg');
                // attach area at interior point
                measureTooltipCoord = geom.getInteriorPoint().getCoordinates();
            } else if (measureType === 'line') {
                output = me.formatLength(geom);
                helpMsg = me.getViewModel().get('continueLineMsg');
                measureTooltipCoord = geom.getLastCoordinate();
            } else if (measureType === 'angle') {
                output = me.formatAngle(geom);
                helpMsg = me.getViewModel().get('continueAngleMsg');
            }
            me.measureTooltipElement.innerHTML = output;
            me.measureTooltip.setPosition(measureTooltipCoord);
        }

        me.helpTooltipElement.innerHTML = helpMsg;
        me.helpTooltip.setPosition(helpTooltipCoord);
    },

    /**
     * Creates a new help tooltip as `ol.Overlay`.
     */
    createHelpTooltip: function() {
        var me = this;
        var CSS = BasiGX.view.button.Measure.CSS_CLASSES;

        if (me.helpTooltipElement) {
            return;
        }

        me.helpTooltipElement = Ext.dom.Helper.createDom('<div>');
        me.helpTooltipElement.className = CSS.TOOLTIP;
        me.helpTooltip = new ol.Overlay({
            element: me.helpTooltipElement,
            offset: [15, 0],
            positioning: 'center-left'
        });
        me.map.addOverlay(me.helpTooltip);
    },

    /**
     * Creates a new measure tooltip as `ol.Overlay`.
     */
    createMeasureTooltip: function() {
        var me = this;
        var CSS = BasiGX.view.button.Measure.CSS_CLASSES;
        if (me.measureTooltipElement) {
            return;
        }

        me.measureTooltipElement = Ext.dom.Helper.createDom('<div>');
        me.measureTooltipElement.className = CSS.TOOLTIP +
            ' ' + CSS.TOOLTIP_DYNAMIC;
        me.measureTooltip = new ol.Overlay({
            element: me.measureTooltipElement,
            offset: [0, -15],
            positioning: 'bottom-center'
        });
        me.map.addOverlay(me.measureTooltip);
    },

    /**
     *
     */
    removeHelpTooltip: function() {
        var me = this;
        if (me.helpTooltipElement && me.helpTooltipElement.parent) {
            me.helpTooltipElement.parent.removeChild(me.helpTooltipElement);
        }
        if (me.helpTooltip) {
            me.map.removeOverlay(me.helpTooltip);
        }
        me.helpTooltipElement = null;
        me.helpTooltip = null;
    },

    /**
     *
     */
    removeMeasureTooltip: function() {
        var me = this;
        if (me.measureTooltipElement && me.measureTooltipElement.parent) {
            me.measureTooltipElement.parent.removeChild(
                me.measureTooltipElement
            );
        }
        if (me.measureTooltip) {
            me.map.removeOverlay(me.measureTooltip);
        }
        me.measureTooltipElement = null;
        me.measureTooltip = null;
    },

    /**
     * Format length output for the tooltip.
     *
     * @param {ol.geom.MultiLineString} line The drawn line.
     * @return {String} The formatted length of the line.
     */
    formatLength: function(line) {
        var me = this;
        var decimalHelper = Math.pow(10, me.decimalPlacesInToolTips);
        var length;

        if (me.geodesic) {
            var coordinates = line.getCoordinates();
            length = 0;
            var sourceProj = me.map.getView().getProjection();
            for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
                var c1 = ol.proj.transform(
                    coordinates[i], sourceProj, 'EPSG:4326');
                var c2 = ol.proj.transform(
                    coordinates[i + 1], sourceProj, 'EPSG:4326');
                length += ol.sphere.getDistance(c1, c2);
            }
        } else {
            length = Math.round(line.getLength() * 100) / 100;
        }
        var output;
        if (me.switchToKmOnLargeValues && length > 1000) {
            output = (Math.round(length / 1000 * decimalHelper) /
                decimalHelper) + ' ' + 'km';
        } else {
            output = (Math.round(length * decimalHelper) / decimalHelper) +
                ' m';
        }
        return output;
    },

    /**
     * Format length output for the tooltip.
     *
     * @param {ol.geom.Polygon} polygon The drawn polygon.
     * @return {String} The formatted area of the polygon.
     */
    formatArea: function(polygon) {
        var me = this;
        var decimalHelper = Math.pow(10, me.decimalPlacesInToolTips);
        var area;

        if (me.geodesic) {
            var sourceProj = me.map.getView().getProjection();

            area = Math.abs(ol.sphere.getArea(polygon, {
                projection: sourceProj
            }));
        } else {
            area = polygon.getArea();
        }

        var output;
        if (me.switchToKmOnLargeValues && area > 10000) {
            output = (Math.round(area / 1000000 * decimalHelper) /
                decimalHelper) + ' km<sup>2</sup>';
        } else {
            output = (Math.round(area * decimalHelper) / decimalHelper) +
                ' ' + 'm<sup>2</sup>';
        }
        return output;
    },

    /**
     * Determine the angle between two coordinates. The angle will be between
     * -180° and 180°, with 0° being in the east. The angle will increase
     * counter-clockwise.
     *
     * Inspired by http://stackoverflow.com/a/31136507
     *
     * @param {Array<Number>} start The start coordinates of the line with the
     *     x-coordinate being at index `0` and y-coordinate being at index `1`.
     * @param {Array<Number>} end The end coordinates of the line with the
     *     x-coordinate being at index `0` and y-coordinate being at index `1`.
     * @return {Number} the angle in degreees, ranging from -180° to 180°.
     */
    angle: function(start, end) {
        var dx = start[0] - end[0];
        var dy = start[1] - end[1];
        // range (-PI, PI]
        var theta = Math.atan2(dy, dx);
        // rads to degs, range (-180, 180]
        theta *= 180 / Math.PI;
        return theta;
    },

    /**
     * Determine the angle between two coordinates. The angle will be between
     * 0° and 360°, with 0° being in the east. The angle will increase
     * counter-clockwise.
     *
     * Inspired by http://stackoverflow.com/a/31136507
     *
     * @param {Array<Number>} start The start coordinates of the line with the
     *     x-coordinate being at index `0` and y-coordinate being at index `1`.
     * @param {Array<Number>} end The end coordinates of the line with the
     *     x-coordinate being at index `0` and y-coordinate being at index `1`.
     * @return {Number} the angle in degreees, ranging from 0° and 360°.
     */
    angle360: function(start, end) {
        // range (-180, 180]
        var theta = this.angle(start, end);
        if (theta < 0) {
            // range [0, 360)
            theta = 360 + theta;
        }
        return theta;
    },

    /**
     * Given an angle between 0° and 360° this angle returns the exact opposite
     * of the angle, e.g. for 90° you'll get back 270°. This effectively turns
     * the direction of the angle from counter-clockwise to clockwise.
     *
     * @param {Number} angle360 The input angle obtained counter-clockwise.
     * @return {Number} The clockwise angle.
     */
    makeClockwise: function(angle360) {
        return 360 - angle360;
    },

    /**
     * This methods adds an offset of 90° to an counter-clockwise increasing
     * angle of a line so that the origin (0°) lies at the top (in the north).
     *
     * @param {Number} angle360 The input angle obtained counter-clockwise, with
     *     0° degrees being in the east.
     * @return {Number} The adjusted angle, with 0° being in the north.
     */
    makeZeroDegreesAtNorth: function(angle360) {
        var corrected = angle360 + 90;
        if (corrected > 360) {
            corrected = corrected - 360;
        }
        return corrected;
    },

    /**
     * Returns the angle of the passed linestring in degrees, with 'N' being the
     * 0°-line and the angle increases in clockwise direction.
     *
     * TODO The angle calculation assumes an unrotated view. We should enhance
     *    this method to (optionally) correct the determined angle by the
     *    rotation of the map.
     *
     * @param {ol.geom.LineString} line The linestring to get the
     *     angle from. As this line is comming from our internal draw
     *     interaction, we know that it will only consist of two points.
     * @return {String} The formatted angle of the line.
     */
    formatAngle: function(line) {
        var me = this;
        var coords = line.getCoordinates();
        var numCoords = coords.length;
        if (numCoords < 2) {
            return '';
        }

        var lastPoint = coords[numCoords - 1];
        var prevPoint = coords[numCoords - 2];
        var angle = me.angle360(prevPoint, lastPoint);

        angle = me.makeZeroDegreesAtNorth(angle);
        angle = me.makeClockwise(angle);
        angle = angle.toFixed(me.decimalPlacesInToolTips);

        return angle + '°';
    }
});
