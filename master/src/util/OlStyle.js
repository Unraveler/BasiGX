/* Copyright (c) 2019-present terrestris GmbH & Co. KG
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
 * Utility class containing a static method for working with OpenLayers vector
 * styles.
 *
 * @class BasiGX.util.OlStyle
 */
Ext.define('BasiGX.util.OlStyle', {

    statics: {

        privates: {
            IMAGETYPECIRCLE: 'circle',
            IMAGETYPEICON: 'icon',
            IMAGETYPESHAPE: 'regularShape'
        },

        /**
         * Returns an `ol.style.Style` matching the passed plain `styleObj`
         * object.
         *
         * @param {Object} styleObj A plain object representing an OpenLayers
         *     style.
         * @return {ol.style.Style} An instance of `ol.style.Style` matching the
         *     passed plain `styleObj` object.
         */
        readStyle: function(styleObj) {
            if (!styleObj) {
                return undefined;
            }

            return new ol.style.Style({
                fill: this.readFillStyle(styleObj.fill),
                image: this.readImageStyle(styleObj.image),
                stroke: this.readStrokeStyle(styleObj.stroke),
                text: this.readTextStyle(styleObj.text),
                zIndex: styleObj.zIndex || undefined
            });
        },

        /**
         * Returns an `ol.style.Image` style (`ol.style.Circle`, `ol.style.Icon`
         * or `ol.style.RegularShape`) matching the passed plain `imageStyleObj`
         * object.
         *
         * @param {Object} imageStyleObj A plain object representing an
         *     OpenLayers 'image' style.
         * @return {ol.style.Image} An image style whose concrete subclass
         *     depends on the `type` property of the `imageStyleObj`.
         */
        readImageStyle: function(imageStyleObj) {
            if (!imageStyleObj) {
                return undefined;
            }

            if (imageStyleObj.type === this.IMAGETYPECIRCLE) {
                return this.readCircleStyle(imageStyleObj);
            }

            if (imageStyleObj.type === this.IMAGETYPEICON) {
                return this.readIconStyle(imageStyleObj);
            }

            if (imageStyleObj.type === this.IMAGETYPESHAPE) {
                return this.readRegularShapeStyle(imageStyleObj);
            }

        },

        /**
         * Returns an `ol.style.Circle` matching the passed plain
         * `circleStyleObj` object.
         *
         * @param {Object} circleStyleObj A plain object representing an
         *     OpenLayers circle style.
         * @return {ol.style.Circle} An instance of `ol.style.Circle` matching
         *     the passed plain `circleStyleObj` object.
         */
        readCircleStyle: function(circleStyleObj) {
            return new ol.style.Circle({
                fill: this.readFillStyle(circleStyleObj.fill),
                image: this.readImageStyle(circleStyleObj.image),
                opacity: circleStyleObj.opacity || undefined,
                radius: circleStyleObj.radius,
                rotateWithView: circleStyleObj.rotateWithView || undefined,
                rotation: circleStyleObj.rotation || undefined,
                scale: circleStyleObj.scale || undefined,
                snapToPixel: circleStyleObj.snapToPixel || undefined,
                stroke: this.readStrokeStyle(circleStyleObj.stroke)
            });
        },

        /**
         * Returns an `ol.style.Icon` matching the passed plain `iconStyleObj`
         * object.
         *
         * @param {Object} iconStyleObj A plain object representing an
         *     OpenLayers icon style.
         * @return {ol.style.Icon} An instance of `ol.style.Icon` matching
         *     the passed plain `iconStyleObj` object.
         */
        readIconStyle: function(iconStyleObj) {
            return new ol.style.Icon({
                anchor: iconStyleObj.anchor || undefined,
                anchorXUnits: iconStyleObj.anchorXUnits || undefined,
                anchorYUnits: iconStyleObj.anchorYUnits || undefined,
                anchorOrigin: iconStyleObj.anchorOrigin || undefined,
                opacity: iconStyleObj.opacity || undefined,
                rotateWithView: iconStyleObj.rotateWithView || undefined,
                rotation: iconStyleObj.rotation || undefined,
                scale: iconStyleObj.scale || undefined,
                size: iconStyleObj.size || undefined,
                snapToPixel: iconStyleObj.snapToPixel || undefined,
                src: iconStyleObj.src
            });
        },

        /**
         * Returns an `ol.style.RegularShape` matching the passed plain
         * `iconStyleObj` object.
         *
         * @param {Object} regularShapeStyleObj A plain object representing an
         *     OpenLayers regular shape style.
         * @return {ol.style.RegularShape} An instance of
         *     `ol.style.RegularShape` matching the passed plain
         *     `regularShapeStyleObj` object.
         */
        readRegularShapeStyle: function(regularShapeStyleObj) {
            return new ol.style.RegularShape({
                angle: regularShapeStyleObj.angle || undefined,
                fill: this.readFillStyle(regularShapeStyleObj.fill),
                opacity: regularShapeStyleObj.opacity || undefined,
                points: regularShapeStyleObj.points,
                radius: regularShapeStyleObj.radius || undefined,
                radius2: regularShapeStyleObj.radius2 || undefined,
                rotateWithView: regularShapeStyleObj.rotateWithView ||
                        undefined,
                rotation: regularShapeStyleObj.rotation || undefined,
                scale: regularShapeStyleObj.scale || undefined,
                snapToPixel: regularShapeStyleObj.snapToPixel || undefined,
                stroke: this.readStrokeStyle(regularShapeStyleObj.stroke)
            });
        },

        /**
         * Returns an `ol.style.Fill` matching the passed plain `fillStyleObj`
         * object.
         *
         * @param {Object} fillStyleObj A plain object representing an
         *     OpenLayers fill style.
         * @return {ol.style.Fill} An instance of `ol.style.Fill` matching the
         *     passed plain `fillStyleObj` object.
         */
        readFillStyle: function(fillStyleObj) {
            if (!fillStyleObj) {
                return undefined;
            }

            return new ol.style.Fill(fillStyleObj);
        },

        /**
         * Returns an `ol.style.Stroke` matching the passed plain
         * `strokeStyleObj` object.
         *
         * @param {Object} strokeStyleObj A plain object representing an
         *     OpenLayers stroke style.
         * @return {ol.style.Stroke} An instance of `ol.style.Stroke` matching
         *     the passed plain `strokeStyleObj` object.
         */
        readStrokeStyle: function(strokeStyleObj) {
            if (!strokeStyleObj) {
                return undefined;
            }

            return new ol.style.Stroke(strokeStyleObj);
        },

        /**
         * Returns an `ol.style.Text` matching the passed plain `textStyleObj`
         * object.
         *
         * @param {Object} textStyleObj A plain object representing an
         *     OpenLayers text style.
         * @return {ol.style.Text} An instance of `ol.style.Text` matching the
         *     passed plain `textStyleObj` object.
         */
        readTextStyle: function(textStyleObj) {
            if (!textStyleObj) {
                return undefined;
            }

            return new ol.style.Text({
                fill: this.readFillStyle(textStyleObj.fill),
                font: textStyleObj.font || undefined,
                offsetX: textStyleObj.offsetX || undefined,
                offsetY: textStyleObj.offsetY || undefined,
                rotation: textStyleObj.rotation || undefined,
                scale: textStyleObj.scale || undefined,
                stroke: this.readStrokeStyle(textStyleObj.stroke),
                text: textStyleObj.text || undefined,
                textAlign: textStyleObj.textAlign || undefined,
                textBaseline: textStyleObj.textBaseline || undefined
            });
        },

        /**
         * Returns a plain object matching the passed `ol.style.Style` instance.
         *
         * @param {ol.style.Style} olStyle An ol.style.Style instance.
         * @return {Object} A plain object matching the passed `ol.style.Style`
         *     instance.
         */
        writeStyle: function(olStyle) {
            if (!(olStyle instanceof ol.style.Style)) {
                return undefined;
            }

            return {
                fill: this.writeFillStyle(olStyle.getFill()),
                image: this.writeImageStyle(olStyle.getImage()),
                stroke: this.writeStrokeStyle(olStyle.getStroke()),
                text: this.writeTextStyle(olStyle.getText()),
                zIndex: olStyle.getZIndex()
            };
        },

        /**
         * Returns a plain object matching the passed ol.style.Image instance.
         *
         * Works with `ol.style.Circle`, `ol.style.Icon` and
         * `ol.style.RegularShape`
         *
         * @param {ol.style.Image} olImageStyle An ol.style.Image instance.
         * @return {Object} A plain object matching the passed `ol.style.Image`
         *     instance.
         */
        writeImageStyle: function(olImageStyle) {
            if (!(olImageStyle instanceof ol.style.Image)) {
                return undefined;
            }

            if (olImageStyle instanceof ol.style.Circle) {
                return this.writeCircleStyle(olImageStyle);
            }

            if (olImageStyle instanceof ol.style.Icon) {
                return this.writeIconStyle(olImageStyle);
            }

            if (olImageStyle instanceof ol.style.RegularShape) {
                return this.writeRegularShapeStyle(olImageStyle);
            }
        },

        /**
         * Returns a plain object matching the passed ol.style.Circle instance.
         *
         * @param {ol.style.Circle} olCircleStyle An ol.style.Circle instance.
         * @return {Object} A plain object matching the passed `ol.style.Circle`
         *     instance.
         */
        writeCircleStyle: function(olCircleStyle) {
            if (!(olCircleStyle instanceof ol.style.Circle)) {
                return undefined;
            }

            return {
                // provide additional type info for the object mapper
                type: this.IMAGETYPECIRCLE,
                fill: this.writeFillStyle(olCircleStyle.getFill()),
                image: this.writeImageStyle(olCircleStyle.getImage()),
                opacity: olCircleStyle.getOpacity(),
                radius: olCircleStyle.getRadius(),
                rotateWithView: olCircleStyle.getRotateWithView(),
                rotation: olCircleStyle.getRotation(),
                scale: olCircleStyle.getScale(),
                stroke: this.writeStrokeStyle(olCircleStyle.getStroke())
            };
        },

        /**
         * Returns a plain object matching the passed ol.style.Icon instance.
         *
         * @param {ol.style.Icon} olIconStyle An ol.style.Icon instance.
         * @return {Object} A plain object matching the passed `ol.style.Icon`
         *     instance.
         */
        writeIconStyle: function(olIconStyle) {
            if (!(olIconStyle instanceof ol.style.Icon)) {
                return undefined;
            }

            return {
                // provide additional type info for the object mapper
                type: this.IMAGETYPEICON,
                anchor: olIconStyle.getAnchor(),
                // getAnchor() returns the anchor in pixel values always, hence
                // we need to set the anchorUnits respectively
                anchorXUnits: 'pixels',
                anchorYUnits: 'pixels',
                anchorOrigin: olIconStyle.getOrigin(),
                opacity: olIconStyle.getOpacity(),
                rotateWithView: olIconStyle.getRotateWithView(),
                rotation: olIconStyle.getRotation(),
                scale: olIconStyle.getScale(),
                size: olIconStyle.getSize(),
                src: olIconStyle.getSrc()
            };
        },

        /**
         * Returns a plain object matching the passed ol.style.RegularShape
         * instance.
         *
         * @param {ol.style.RegularShape} olRegularShape An
         *     ol.style.RegularShape instance.
         * @return {Object} A plain object matching the passed
         *     `ol.style.RegularShape` instance.
         */
        writeRegularShapeStyle: function(olRegularShape) {
            if (!(olRegularShape instanceof ol.style.RegularShape)) {
                return undefined;
            }

            return {
                // provide additional type info for the object mapper
                type: this.IMAGETYPESHAPE,
                angle: olRegularShape.getAngle(),
                fill: this.writeFillStyle(olRegularShape.getFill()),
                opacity: olRegularShape.getOpacity(),
                points: olRegularShape.getPoints(),
                radius: olRegularShape.getRadius(),
                radius2: olRegularShape.getRadius2(),
                rotateWithView: olRegularShape.getRotateWithView(),
                rotation: olRegularShape.getRotation(),
                scale: olRegularShape.getScale(),
                stroke: this.writeStrokeStyle(olRegularShape.getStroke())
            };
        },

        /**
         * Returns a plain object matching the passed ol.style.Fill instance.
         *
         * @param {ol.style.Fill} olFillStyle An ol.style.Fill instance.
         * @return {Object} A plain object matching the passed `ol.style.Fill`
         *     instance.
         */
        writeFillStyle: function(olFillStyle) {
            if (!(olFillStyle instanceof ol.style.Fill)) {
                return undefined;
            }

            return {
                color: olFillStyle.getColor()
            };
        },

        /**
         * Returns a plain object matching the passed ol.style.Stroke instance.
         *
         * @param {ol.style.Stroke} olStrokeStyle An ol.style.Stroke instance.
         * @return {Object} A plain object matching the passed `ol.style.Stroke`
         *     instance.
         */
        writeStrokeStyle: function(olStrokeStyle) {
            if (!(olStrokeStyle instanceof ol.style.Stroke)) {
                return undefined;
            }

            return {
                color: olStrokeStyle.getColor(),
                lineCap: olStrokeStyle.getLineCap(),
                lineJoin: olStrokeStyle.getLineJoin(),
                lineDash: olStrokeStyle.getLineDash(),
                miterLimit: olStrokeStyle.getMiterLimit(),
                width: olStrokeStyle.getWidth()
            };
        },

        /**
         * Returns a plain object matching the passed ol.style.Text instance.
         *
         * @param {ol.style.Text} olTextStyle An ol.style.Text instance.
         * @return {Object} A plain object matching the passed `ol.style.Text`
         *     instance.
         */
        writeTextStyle: function(olTextStyle) {
            if (!(olTextStyle instanceof ol.style.Text)) {
                return undefined;
            }

            return {
                fill: this.writeFillStyle(olTextStyle.getFill()),
                font: olTextStyle.getFont(),
                offsetX: olTextStyle.getOffsetX(),
                offsetY: olTextStyle.getOffsetY(),
                rotation: olTextStyle.getRotation(),
                scale: olTextStyle.getScale(),
                stroke: this.writeStrokeStyle(olTextStyle.getStroke()),
                text: olTextStyle.getText(),
                textAlign: olTextStyle.getTextAlign(),
                textBaseline: olTextStyle.getTextBaseline()
            };
        }

    }

});
