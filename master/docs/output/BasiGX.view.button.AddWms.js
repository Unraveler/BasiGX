Ext.data.JsonP.BasiGX_view_button_AddWms({"tagname":"class","name":"BasiGX.view.button.AddWms","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"AddWms.js","href":"AddWms.html#BasiGX-view-button-AddWms"}],"aliases":{"widget":["basigx-button-addwms"]},"alternateClassNames":[],"extends":"BasiGX.view.button.Base","mixins":[],"requires":["BasiGX.util.Animate","BasiGX.view.form.AddWms","Ext.app.ViewModel","Ext.window.Window"],"uses":[],"members":[{"name":"windowConfig","tagname":"cfg","owner":"BasiGX.view.button.AddWms","id":"cfg-windowConfig","meta":{"private":true}},{"name":"_win","tagname":"property","owner":"BasiGX.view.button.AddWms","id":"property-_win","meta":{"private":true}},{"name":"bind","tagname":"property","owner":"BasiGX.view.button.AddWms","id":"property-bind","meta":{}},{"name":"config","tagname":"property","owner":"BasiGX.view.button.AddWms","id":"property-config","meta":{}},{"name":"liveDemoConfig","tagname":"property","owner":"BasiGX.view.button.AddWms","id":"property-liveDemoConfig","meta":{}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.button.AddWms","id":"property-viewModel","meta":{}},{"name":"constructor","tagname":"method","owner":"BasiGX.view.button.Base","id":"method-constructor","meta":{}},{"name":"getWindowConfig","tagname":"method","owner":"BasiGX.view.button.AddWms","id":"method-getWindowConfig","meta":{}},{"name":"handler","tagname":"method","owner":"BasiGX.view.button.AddWms","id":"method-handler","meta":{"private":true}},{"name":"onDestroy","tagname":"method","owner":"BasiGX.view.button.AddWms","id":"method-onDestroy","meta":{}},{"name":"setWindowConfig","tagname":"method","owner":"BasiGX.view.button.AddWms","id":"method-setWindowConfig","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.button.AddWms","component":false,"superclasses":["Ext.Button","BasiGX.view.button.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Button<div class='subclass '><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='docClass'>BasiGX.view.button.Base</a><div class='subclass '><strong>BasiGX.view.button.AddWms</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Animate' rel='BasiGX.util.Animate' class='docClass'>BasiGX.util.Animate</a></div><div class='dependency'><a href='#!/api/BasiGX.view.form.AddWms' rel='BasiGX.view.form.AddWms' class='docClass'>BasiGX.view.form.AddWms</a></div><div class='dependency'>Ext.app.ViewModel</div><div class='dependency'>Ext.window.Window</div><h4>Files</h4><div class='dependency'><a href='source/AddWms.html#BasiGX-view-button-AddWms' target='_blank'>AddWms.js</a></div></pre><div class='doc-contents'><p>AddWms Button</p>\n\n<p>Button used to instanciate the basigx-form-addwms in order to add a\nWMS to the map</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-windowConfig' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.AddWms'>BasiGX.view.button.AddWms</span><br/><a href='source/AddWms.html#BasiGX-view-button-AddWms-cfg-windowConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.AddWms-cfg-windowConfig' class='name expandable'>windowConfig</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_win' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.AddWms'>BasiGX.view.button.AddWms</span><br/><a href='source/AddWms.html#BasiGX-view-button-AddWms-property-_win' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.AddWms-property-_win' class='name expandable'>_win</a> : Ext.window.Window<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>The window instance which will be created by this button.</p>\n</div><div class='long'><p>The window instance which will be created by this button.</p>\n</div></div></div><div id='property-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.AddWms'>BasiGX.view.button.AddWms</span><br/><a href='source/AddWms.html#BasiGX-view-button-AddWms-property-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.AddWms-property-bind' class='name expandable'>bind</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{text: &#39;{text}&#39;}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-bind\" rel=\"BasiGX.view.button.Base-property-bind\" class=\"docClass\">BasiGX.view.button.Base.bind</a></p></div></div></div><div id='property-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.AddWms'>BasiGX.view.button.AddWms</span><br/><a href='source/AddWms.html#BasiGX-view-button-AddWms-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.AddWms-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{windowConfig: {}}</code></p></div></div></div><div id='property-liveDemoConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.AddWms'>BasiGX.view.button.AddWms</span><br/><a href='source/AddWms.html#BasiGX-view-button-AddWms-property-liveDemoConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.AddWms-property-liveDemoConfig' class='name expandable'>liveDemoConfig</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>A config object to show this tool in action (live demo) when using the\ncontext sensitive help ...</div><div class='long'><p>A config object to show this tool in action (live demo) when using the\ncontext sensitive help</p>\n<p>Defaults to: <code>[{moveMouseTo: {component: &#39;basigx-button-addwms&#39;, moveDuration: 2000}}, {clickOnButton: &#39;basigx-button-addwms&#39;}, {moveMouseTo: {component: &#39;window[name=add-wms-window] textfield[name=url]&#39;, moveDuration: 2000}}, {enterText: {component: &#39;window[name=add-wms-window] textfield[name=url]&#39;, text: &#39;https://ows.terrestris.de/osm/service&#39;, waitAfter: 3500}}, {moveMouseTo: &#39;window[name=add-wms-window] button[name=requestLayersBtn]&#39;}, {clickOnButton: {component: &#39;window[name=add-wms-window] button[name=requestLayersBtn]&#39;, waitAfter: 3000}}, {scrollTo: {component: &#39;window[name=add-wms-window] form&#39;, target: {x: 0, y: 999, animate: true}}}, {moveMouseTo: &#39;window[name=add-wms-window] button[name=add-checked-layers]&#39;}, {destroy: &#39;window[name=add-wms-window]&#39;}]</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.AddWms'>BasiGX.view.button.AddWms</span><br/><a href='source/AddWms.html#BasiGX-view-button-AddWms-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.AddWms-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {tooltip: &#39;WMS hinzufügen&#39;, text: &#39;WMS &lt;span style=&quot;font-size: 1.7em; &#39; + &#39;font-weight: normal;&quot;&gt;⊕&lt;/span&gt;&#39;, windowTitle: &#39;WMS hinzufügen&#39;, documentation: &#39;&lt;h2&gt;WMS hinzufügen&lt;/h2&gt;• Ein Klick auf den &#39; + &#39;Button öffnet ein Fenster, in dem Sie mit Hilfe einer &#39; + &#39;WMS-URL einen beliebigen Kartendienst der Karte hinzufügen &#39; + &#39;können.&#39;}}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-viewModel\" rel=\"BasiGX.view.button.Base-property-viewModel\" class=\"docClass\">BasiGX.view.button.Base.viewModel</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='defined-in docClass'>BasiGX.view.button.Base</a><br/><a href='source/Base.html#BasiGX-view-button-Base-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/BasiGX.view.button.Base-method-constructor' class='name expandable'>BasiGX.view.button.AddWms</a>( <span class='pre'></span> ) : <a href=\"#!/api/BasiGX.view.button.Base\" rel=\"BasiGX.view.button.Base\" class=\"docClass\">BasiGX.view.button.Base</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BasiGX.view.button.Base\" rel=\"BasiGX.view.button.Base\" class=\"docClass\">BasiGX.view.button.Base</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getWindowConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.AddWms'>BasiGX.view.button.AddWms</span><br/><a href='source/AddWms.html#BasiGX-view-button-AddWms-cfg-windowConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.AddWms-method-getWindowConfig' class='name expandable'>getWindowConfig</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of windowConfig. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.AddWms-cfg-windowConfig\" rel=\"BasiGX.view.button.AddWms-cfg-windowConfig\" class=\"docClass\">windowConfig</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.AddWms'>BasiGX.view.button.AddWms</span><br/><a href='source/AddWms.html#BasiGX-view-button-AddWms-method-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.AddWms-method-handler' class='name expandable'>handler</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onDestroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.AddWms'>BasiGX.view.button.AddWms</span><br/><a href='source/AddWms.html#BasiGX-view-button-AddWms-method-onDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.AddWms-method-onDestroy' class='name expandable'>onDestroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Reset window reference ...</div><div class='long'><p>Reset window reference</p>\n</div></div></div><div id='method-setWindowConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.AddWms'>BasiGX.view.button.AddWms</span><br/><a href='source/AddWms.html#BasiGX-view-button-AddWms-cfg-windowConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.AddWms-method-setWindowConfig' class='name expandable'>setWindowConfig</a>( <span class='pre'>windowConfig</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of windowConfig. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.AddWms-cfg-windowConfig\" rel=\"BasiGX.view.button.AddWms-cfg-windowConfig\" class=\"docClass\">windowConfig</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>windowConfig</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});