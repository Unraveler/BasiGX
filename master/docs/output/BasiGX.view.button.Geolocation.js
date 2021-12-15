Ext.data.JsonP.BasiGX_view_button_Geolocation({"tagname":"class","name":"BasiGX.view.button.Geolocation","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Geolocation.js","href":"Geolocation.html#BasiGX-view-button-Geolocation"}],"aliases":{"widget":["basigx-button-geolocation"]},"alternateClassNames":[],"extends":"BasiGX.view.button.Base","mixins":[],"requires":["BasiGX.util.Layer","BasiGX.util.Map","Ext.app.ViewModel"],"uses":[],"members":[{"name":"accuracyFeature","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-accuracyFeature","meta":{}},{"name":"bind","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-bind","meta":{}},{"name":"enableToggle","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-enableToggle","meta":{}},{"name":"fillColor","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-fillColor","meta":{}},{"name":"geolocation","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-geolocation","meta":{}},{"name":"geolocationVectorLayer","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-geolocationVectorLayer","meta":{}},{"name":"glyph","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-glyph","meta":{}},{"name":"html","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-html","meta":{"private":true}},{"name":"liveDemoConfig","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-liveDemoConfig","meta":{}},{"name":"positionFeature","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-positionFeature","meta":{}},{"name":"showAccuracy","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-showAccuracy","meta":{}},{"name":"strokeColor","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-strokeColor","meta":{}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.button.Geolocation","id":"property-viewModel","meta":{}},{"name":"constructor","tagname":"method","owner":"BasiGX.view.button.Geolocation","id":"method-constructor","meta":{}},{"name":"createGeolocationLayer","tagname":"method","owner":"BasiGX.view.button.Geolocation","id":"method-createGeolocationLayer","meta":{}},{"name":"onBtnToggle","tagname":"method","owner":"BasiGX.view.button.Geolocation","id":"method-onBtnToggle","meta":{}},{"name":"updateAccuracyFeature","tagname":"method","owner":"BasiGX.view.button.Geolocation","id":"method-updateAccuracyFeature","meta":{"private":true}},{"name":"updatePositionFeature","tagname":"method","owner":"BasiGX.view.button.Geolocation","id":"method-updatePositionFeature","meta":{"private":true}}],"code_type":"ext_define","id":"class-BasiGX.view.button.Geolocation","component":false,"superclasses":["Ext.Button","BasiGX.view.button.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Button<div class='subclass '><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='docClass'>BasiGX.view.button.Base</a><div class='subclass '><strong>BasiGX.view.button.Geolocation</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Layer' rel='BasiGX.util.Layer' class='docClass'>BasiGX.util.Layer</a></div><div class='dependency'><a href='#!/api/BasiGX.util.Map' rel='BasiGX.util.Map' class='docClass'>BasiGX.util.Map</a></div><div class='dependency'>Ext.app.ViewModel</div><h4>Files</h4><div class='dependency'><a href='source/Geolocation.html#BasiGX-view-button-Geolocation' target='_blank'>Geolocation.js</a></div></pre><div class='doc-contents'><p>A geolocation tool button.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-accuracyFeature' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-accuracyFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-accuracyFeature' class='name expandable'>accuracyFeature</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-bind' class='name expandable'>bind</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{text: &#39;{text}&#39;}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-bind\" rel=\"BasiGX.view.button.Base-property-bind\" class=\"docClass\">BasiGX.view.button.Base.bind</a></p></div></div></div><div id='property-enableToggle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-enableToggle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-enableToggle' class='name expandable'>enableToggle</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-fillColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-fillColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-fillColor' class='name expandable'>fillColor</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;rgba(255, 0, 0, 0.5)&#39;</code></p></div></div></div><div id='property-geolocation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-geolocation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-geolocation' class='name expandable'>geolocation</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-geolocationVectorLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-geolocationVectorLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-geolocationVectorLayer' class='name expandable'>geolocationVectorLayer</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-glyph' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-glyph' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-glyph' class='name expandable'>glyph</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The icons the button should use. ...</div><div class='long'><p>The icons the button should use.\nClassic Toolkit uses glyphs, modern toolkit uses html</p>\n<p>Defaults to: <code>&#39;xf041@FontAwesome&#39;</code></p></div></div></div><div id='property-html' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-html' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-html' class='name expandable'>html</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;&lt;i class=&quot;fa fa-map-marker fa-2x&quot;&gt;&lt;/i&gt;&#39;</code></p></div></div></div><div id='property-liveDemoConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-liveDemoConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-liveDemoConfig' class='name expandable'>liveDemoConfig</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>A config object to show this tool in action (live demo) when using the\ncontext sensitive help ...</div><div class='long'><p>A config object to show this tool in action (live demo) when using the\ncontext sensitive help</p>\n<p>Defaults to: <code>[{moveMouseTo: {component: &#39;basigx-button-geolocation&#39;, moveDuration: 2000}}, {clickOnButton: &#39;basigx-button-geolocation&#39;}, {moveMouseTo: {component: &#39;basigx-button-geolocation&#39;, moveDuration: 2000}}, {clickOnButton: &#39;basigx-button-geolocation&#39;}]</code></p></div></div></div><div id='property-positionFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-positionFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-positionFeature' class='name expandable'>positionFeature</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-showAccuracy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-showAccuracy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-showAccuracy' class='name expandable'>showAccuracy</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-strokeColor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-strokeColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-strokeColor' class='name expandable'>strokeColor</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;rgba(255, 0, 0, 0.8)&#39;</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {text: &#39;GPS Position anzeigen&#39;, tooltip: &#39;GPS Position anzeigen&#39;, documentation: &#39;&lt;h2&gt;GPS Position anzeigen&lt;/h2&gt;• Ein Klick auf &#39; + &#39;den Button aktiviert die Geo Lokalisierung.&lt;br&gt;• Auf der &#39; + &#39;Karte wird die Position angezeigt.&#39;}}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-viewModel\" rel=\"BasiGX.view.button.Base-property-viewModel\" class=\"docClass\">BasiGX.view.button.Base.viewModel</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/BasiGX.view.button.Geolocation-method-constructor' class='name expandable'>BasiGX.view.button.Geolocation</a>( <span class='pre'></span> ) : <a href=\"#!/api/BasiGX.view.button.Geolocation\" rel=\"BasiGX.view.button.Geolocation\" class=\"docClass\">BasiGX.view.button.Geolocation</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BasiGX.view.button.Geolocation\" rel=\"BasiGX.view.button.Geolocation\" class=\"docClass\">BasiGX.view.button.Geolocation</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-method-constructor\" rel=\"BasiGX.view.button.Base-method-constructor\" class=\"docClass\">BasiGX.view.button.Base.constructor</a></p></div></div></div><div id='method-createGeolocationLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-method-createGeolocationLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-method-createGeolocationLayer' class='name expandable'>createGeolocationLayer</a>( <span class='pre'></span> ) : ol.layer.Vector<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a vector layer to show the geolocation on. ...</div><div class='long'><p>Creates a vector layer to show the geolocation on.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Vector</span><div class='sub-desc'><p>The layer.</p>\n</div></li></ul></div></div></div><div id='method-onBtnToggle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-method-onBtnToggle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-method-onBtnToggle' class='name expandable'>onBtnToggle</a>( <span class='pre'>btn, pressed</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when the button is toggled, this method ensures that everything\nis cleaned up when unpressed. ...</div><div class='long'><p>Called when the button is toggled, this method ensures that everything\nis cleaned up when unpressed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>btn</span> : Ext.Button<div class='sub-desc'><p>The button itself.</p>\n</div></li><li><span class='pre'>pressed</span> : Boolean<div class='sub-desc'><p>Whether the button is now pressed or not.</p>\n</div></li></ul></div></div></div><div id='method-updateAccuracyFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-method-updateAccuracyFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-method-updateAccuracyFeature' class='name expandable'>updateAccuracyFeature</a>( <span class='pre'>geom</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>geom</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-updatePositionFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.Geolocation'>BasiGX.view.button.Geolocation</span><br/><a href='source/Geolocation.html#BasiGX-view-button-Geolocation-method-updatePositionFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.Geolocation-method-updatePositionFeature' class='name expandable'>updatePositionFeature</a>( <span class='pre'>coords</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>coords</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});