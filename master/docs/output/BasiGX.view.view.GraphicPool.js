Ext.data.JsonP.BasiGX_view_view_GraphicPool({"tagname":"class","name":"BasiGX.view.view.GraphicPool","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"GraphicPool.js","href":"GraphicPool2.html#BasiGX-view-view-GraphicPool"}],"aliases":{"widget":["basigx-view-graphicpool"]},"alternateClassNames":[],"extends":"Ext.view.View","mixins":[],"requires":["BasiGX.util.Url","Ext.data.Store"],"uses":[],"members":[{"name":"backendUrls","tagname":"cfg","owner":"BasiGX.view.view.GraphicPool","id":"cfg-backendUrls","meta":{}},{"name":"filterFn","tagname":"cfg","owner":"BasiGX.view.view.GraphicPool","id":"cfg-filterFn","meta":{}},{"name":"itemSelector","tagname":"cfg","owner":"BasiGX.view.view.GraphicPool","id":"cfg-itemSelector","meta":{}},{"name":"multiSelect","tagname":"cfg","owner":"BasiGX.view.view.GraphicPool","id":"cfg-multiSelect","meta":{}},{"name":"overItemCls","tagname":"cfg","owner":"BasiGX.view.view.GraphicPool","id":"cfg-overItemCls","meta":{}},{"name":"trackOver","tagname":"cfg","owner":"BasiGX.view.view.GraphicPool","id":"cfg-trackOver","meta":{}},{"name":"border","tagname":"property","owner":"BasiGX.view.view.GraphicPool","id":"property-border","meta":{}},{"name":"cls","tagname":"property","owner":"BasiGX.view.view.GraphicPool","id":"property-cls","meta":{}},{"name":"config","tagname":"property","owner":"BasiGX.view.view.GraphicPool","id":"property-config","meta":{}},{"name":"emptyStoreMsg","tagname":"property","owner":"BasiGX.view.view.GraphicPool","id":"property-emptyStoreMsg","meta":{}},{"name":"height","tagname":"property","owner":"BasiGX.view.view.GraphicPool","id":"property-height","meta":{}},{"name":"scrollable","tagname":"property","owner":"BasiGX.view.view.GraphicPool","id":"property-scrollable","meta":{}},{"name":"store","tagname":"property","owner":"BasiGX.view.view.GraphicPool","id":"property-store","meta":{}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.view.GraphicPool","id":"property-viewModel","meta":{"private":true}},{"name":"width","tagname":"property","owner":"BasiGX.view.view.GraphicPool","id":"property-width","meta":{}},{"name":"getBackendUrls","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-getBackendUrls","meta":{}},{"name":"getFilterFn","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-getFilterFn","meta":{}},{"name":"getItemSelector","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-getItemSelector","meta":{}},{"name":"getMultiSelect","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-getMultiSelect","meta":{}},{"name":"getOverItemCls","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-getOverItemCls","meta":{}},{"name":"getTrackOver","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-getTrackOver","meta":{}},{"name":"initComponent","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-initComponent","meta":{}},{"name":"setBackendUrls","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-setBackendUrls","meta":{}},{"name":"setFilterFn","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-setFilterFn","meta":{}},{"name":"setItemSelector","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-setItemSelector","meta":{}},{"name":"setMultiSelect","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-setMultiSelect","meta":{}},{"name":"setOverItemCls","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-setOverItemCls","meta":{}},{"name":"setTrackOver","tagname":"method","owner":"BasiGX.view.view.GraphicPool","id":"method-setTrackOver","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.view.GraphicPool","component":false,"superclasses":["Ext.view.View"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.view.View<div class='subclass '><strong>BasiGX.view.view.GraphicPool</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Url' rel='BasiGX.util.Url' class='docClass'>BasiGX.util.Url</a></div><div class='dependency'>Ext.data.Store</div><h4>Files</h4><div class='dependency'><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool' target='_blank'>GraphicPool.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/BasiGX.view.view.GraphicPool\" rel=\"BasiGX.view.view.GraphicPool\" class=\"docClass\">BasiGX.view.view.GraphicPool</a></p>\n\n<p>Used to upload, select and delete graphics</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-backendUrls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-backendUrls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-cfg-backendUrls' class='name expandable'>backendUrls</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The url objects for images. ...</div><div class='long'><p>The url objects for images.\nCan contain url and method property</p>\n</div></div></div><div id='cfg-filterFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-filterFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-cfg-filterFn' class='name expandable'>filterFn</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Optional filter function. ...</div><div class='long'><p>Optional filter function. Can be useful to filter some images in\nunsupported format from store.</p>\n\n<p>For instance, the following filter would return PNG images only:</p>\n\n<p>{\n   filterFn: function(item) {\n       return item.data.fileType === 'image/png';\n   }\n}</p>\n</div></div></div><div id='cfg-itemSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-itemSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-cfg-itemSelector' class='name expandable'>itemSelector</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;div.thumb-wrap&#39;</code></p></div></div></div><div id='cfg-multiSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-multiSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-cfg-multiSelect' class='name expandable'>multiSelect</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>allow multiselect? ...</div><div class='long'><p>allow multiselect?</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-overItemCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-overItemCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-cfg-overItemCls' class='name expandable'>overItemCls</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>mouseover css class for each item\nNOTE/TODO: if set, trackOver becomes redundant ...</div><div class='long'><p>mouseover css class for each item\nNOTE/TODO: if set, trackOver becomes redundant</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-trackOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-trackOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-cfg-trackOver' class='name expandable'>trackOver</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>use trackover? ...</div><div class='long'><p>use trackover?</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-border' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-property-border' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-property-border' class='name expandable'>border</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-cls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-property-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-property-cls' class='name expandable'>cls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>the default class ...</div><div class='long'><p>the default class</p>\n<p>Defaults to: <code>&#39;graphic-pool-view&#39;</code></p></div></div></div><div id='property-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{backendUrls: null, filterFn: null, itemSelector: &#39;div.thumb-wrap&#39;, multiSelect: false, trackOver: true, overItemCls: false}</code></p></div></div></div><div id='property-emptyStoreMsg' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-property-emptyStoreMsg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-property-emptyStoreMsg' class='name expandable'>emptyStoreMsg</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>text displayed when no pictures were found ...</div><div class='long'><p>text displayed when no pictures were found</p>\n<p>Defaults to: <code>&#39;No data found&#39;</code></p></div></div></div><div id='property-height' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-property-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-property-height' class='name expandable'>height</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>the default height of the dataview ...</div><div class='long'><p>the default height of the dataview</p>\n<p>Defaults to: <code>&#39;100%&#39;</code></p></div></div></div><div id='property-scrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-property-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-property-scrollable' class='name expandable'>scrollable</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>shall the dataview be scrollable ...</div><div class='long'><p>shall the dataview be scrollable</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-store' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-property-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-property-store' class='name expandable'>store</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>readonly</p>\n\n<p>will be created on init</p>\n</div><div class='long'><p>readonly</p>\n\n<p>will be created on init</p>\n</div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {emptyStoreMsg: &#39;No data found&#39;}}</code></p></div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-property-width' class='name expandable'>width</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>the default width of the dataview ...</div><div class='long'><p>the default width of the dataview</p>\n<p>Defaults to: <code>&#39;100%&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getBackendUrls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-backendUrls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-getBackendUrls' class='name expandable'>getBackendUrls</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of backendUrls. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-backendUrls\" rel=\"BasiGX.view.view.GraphicPool-cfg-backendUrls\" class=\"docClass\">backendUrls</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFilterFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-filterFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-getFilterFn' class='name expandable'>getFilterFn</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of filterFn. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-filterFn\" rel=\"BasiGX.view.view.GraphicPool-cfg-filterFn\" class=\"docClass\">filterFn</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItemSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-itemSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-getItemSelector' class='name expandable'>getItemSelector</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of itemSelector. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-itemSelector\" rel=\"BasiGX.view.view.GraphicPool-cfg-itemSelector\" class=\"docClass\">itemSelector</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMultiSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-multiSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-getMultiSelect' class='name expandable'>getMultiSelect</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of multiSelect. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-multiSelect\" rel=\"BasiGX.view.view.GraphicPool-cfg-multiSelect\" class=\"docClass\">multiSelect</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOverItemCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-overItemCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-getOverItemCls' class='name expandable'>getOverItemCls</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of overItemCls. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-overItemCls\" rel=\"BasiGX.view.view.GraphicPool-cfg-overItemCls\" class=\"docClass\">overItemCls</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTrackOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-trackOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-getTrackOver' class='name expandable'>getTrackOver</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of trackOver. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-trackOver\" rel=\"BasiGX.view.view.GraphicPool-cfg-trackOver\" class=\"docClass\">trackOver</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setBackendUrls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-backendUrls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-setBackendUrls' class='name expandable'>setBackendUrls</a>( <span class='pre'>backendUrls</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of backendUrls. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-backendUrls\" rel=\"BasiGX.view.view.GraphicPool-cfg-backendUrls\" class=\"docClass\">backendUrls</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>backendUrls</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setFilterFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-filterFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-setFilterFn' class='name expandable'>setFilterFn</a>( <span class='pre'>filterFn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of filterFn. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-filterFn\" rel=\"BasiGX.view.view.GraphicPool-cfg-filterFn\" class=\"docClass\">filterFn</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filterFn</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setItemSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-itemSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-setItemSelector' class='name expandable'>setItemSelector</a>( <span class='pre'>itemSelector</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of itemSelector. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-itemSelector\" rel=\"BasiGX.view.view.GraphicPool-cfg-itemSelector\" class=\"docClass\">itemSelector</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>itemSelector</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setMultiSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-multiSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-setMultiSelect' class='name expandable'>setMultiSelect</a>( <span class='pre'>multiSelect</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of multiSelect. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-multiSelect\" rel=\"BasiGX.view.view.GraphicPool-cfg-multiSelect\" class=\"docClass\">multiSelect</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>multiSelect</span> : Boolean<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setOverItemCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-overItemCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-setOverItemCls' class='name expandable'>setOverItemCls</a>( <span class='pre'>overItemCls</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of overItemCls. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-overItemCls\" rel=\"BasiGX.view.view.GraphicPool-cfg-overItemCls\" class=\"docClass\">overItemCls</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>overItemCls</span> : Boolean<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setTrackOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.view.GraphicPool'>BasiGX.view.view.GraphicPool</span><br/><a href='source/GraphicPool2.html#BasiGX-view-view-GraphicPool-cfg-trackOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.view.GraphicPool-method-setTrackOver' class='name expandable'>setTrackOver</a>( <span class='pre'>trackOver</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of trackOver. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.view.GraphicPool-cfg-trackOver\" rel=\"BasiGX.view.view.GraphicPool-cfg-trackOver\" class=\"docClass\">trackOver</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>trackOver</span> : Boolean<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});