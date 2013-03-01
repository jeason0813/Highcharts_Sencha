Ext.data.JsonP.Chart_ux_Highcharts_RangeSerie({"aliases":{},"enum":null,"meta":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='docClass'>Chart.ux.Highcharts.Serie</a><div class='subclass '><strong>Chart.ux.Highcharts.RangeSerie</strong></div></div></div><h4>Inherited mixins</h4><div class='dependency'>Ext.util.Observable</div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Chart.ux.Highcharts.AreaRangeSerie' rel='Chart.ux.Highcharts.AreaRangeSerie' class='docClass'>Chart.ux.Highcharts.AreaRangeSerie</a></div><div class='dependency'><a href='#!/api/Chart.ux.Highcharts.AreaSplineRangeSerie' rel='Chart.ux.Highcharts.AreaSplineRangeSerie' class='docClass'>Chart.ux.Highcharts.AreaSplineRangeSerie</a></div><div class='dependency'><a href='#!/api/Chart.ux.Highcharts.ColumnRangeSerie' rel='Chart.ux.Highcharts.ColumnRangeSerie' class='docClass'>Chart.ux.Highcharts.ColumnRangeSerie</a></div><h4>Files</h4><div class='dependency'><a href='source/RangeSerie.html#Chart-ux-Highcharts-RangeSerie' target='_blank'>RangeSerie.js</a></div></pre><div class='doc-contents'><p>Serie class for general range series type</p>\n\n<p>See <a href=\"#!/api/Chart.ux.Highcharts.Serie\" rel=\"Chart.ux.Highcharts.Serie\" class=\"docClass\">Chart.ux.Highcharts.Serie</a> class for more info</p>\n\n<p>This is the base class for dealing range series type. RangeSerie offers\nsorted and unsorted ways of specifying range data. If it is desired to\nplot range data that are natively in sorted manner, the series can be specified as</p>\n\n<pre><code>series:[{\n    minDataIndex: 'low',\n    maxDataIndex: 'high',\n    type: 'columnrange'\n}]\n</code></pre>\n\n<p>As for plotting range series data that are naturally without high and low ends, do</p>\n\n<pre><code>series:[{\n    dataIndex: [ 'marketOpen', 'marketClose' ],\n    type: 'columnrange'\n}]\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-colorField' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-cfg-colorField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-cfg-colorField' class='name expandable'>colorField</a><span> : String</span></div><div class='description'><div class='short'>This field is used for setting data point color\nnumber or color hex in '#([0-9])'. ...</div><div class='long'><p>This field is used for setting data point color\nnumber or color hex in '#([0-9])'. Otherwise, the option\nis treated as a field name and the store should return\nrows with the same color field name. For column type series, if you\nwant Highcharts to automatically color each data point,\nthen you should use <a href=\"http://api.highcharts.com/highcharts#plotOptions.column.colorByPoint\">plotOptions.column.colorByPoint</a> option in the series config</p>\n</div></div></div><div id='cfg-dataIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.ux.Highcharts.RangeSerie'>Chart.ux.Highcharts.RangeSerie</span><br/><a href='source/RangeSerie.html#Chart-ux-Highcharts-RangeSerie-cfg-dataIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.RangeSerie-cfg-dataIndex' class='name not-expandable'>dataIndex</a><span> : Array</span></div><div class='description'><div class='short'><p>dataIndex in the range serie class is treated as an array of\n[ field1, field2 ] if it is defined</p>\n</div><div class='long'><p>dataIndex in the range serie class is treated as an array of\n[ field1, field2 ] if it is defined</p>\n<p>Overrides: <a href='#!/api/Chart.ux.Highcharts.Serie-cfg-dataIndex' rel='Chart.ux.Highcharts.Serie-cfg-dataIndex' class='docClass'>Chart.ux.Highcharts.Serie.dataIndex</a></p></div></div></div><div id='cfg-maxDataIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.ux.Highcharts.RangeSerie'>Chart.ux.Highcharts.RangeSerie</span><br/><a href='source/RangeSerie.html#Chart-ux-Highcharts-RangeSerie-cfg-maxDataIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.RangeSerie-cfg-maxDataIndex' class='name not-expandable'>maxDataIndex</a><span> : String</span></div><div class='description'><div class='short'><p>data field mapping to store record which has maximum value</p>\n</div><div class='long'><p>data field mapping to store record which has maximum value</p>\n</div></div></div><div id='cfg-minDataIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.ux.Highcharts.RangeSerie'>Chart.ux.Highcharts.RangeSerie</span><br/><a href='source/RangeSerie.html#Chart-ux-Highcharts-RangeSerie-cfg-minDataIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.RangeSerie-cfg-minDataIndex' class='name not-expandable'>minDataIndex</a><span> : String</span></div><div class='description'><div class='short'><p>data field mapping to store record which has minimum value</p>\n</div><div class='long'><p>data field mapping to store record which has minimum value</p>\n</div></div></div><div id='cfg-type' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-cfg-type' class='name expandable'>type</a><span> : String</span></div><div class='description'><div class='short'>Highcharts series type name. ...</div><div class='long'><p>Highcharts series type name. This field must be specified.</p>\n\n<p>Line, area, scatter and column series are the simplest form of charts\n(includes Polar) which has the simple data mappings: <em>dataIndex</em> or <em>yField</em>\nfor y-axis values and xField for either x-axis category field or data point's\nx-axis coordinate.</p>\n\n<pre><code>series: [{\n   type: 'scatter',\n   xField: 'xValue',\n   yField: 'yValue'\n}]\n</code></pre>\n</div></div></div><div id='cfg-visible' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-cfg-visible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-cfg-visible' class='name expandable'>visible</a><span> : Boolean</span></div><div class='description'><div class='short'>The field used to hide the serie initial. ...</div><div class='long'><p>The field used to hide the serie initial. Defaults to true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-xField' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-cfg-xField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-cfg-xField' class='name expandable'>xField</a><span> : String</span></div><div class='description'><div class='short'>The field used to access the x-axis value from the items from the data\nsource. ...</div><div class='long'><p>The field used to access the x-axis value from the items from the data\nsource. Store's record</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-needSorting' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.ux.Highcharts.RangeSerie'>Chart.ux.Highcharts.RangeSerie</span><br/><a href='source/RangeSerie.html#Chart-ux-Highcharts-RangeSerie-property-needSorting' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.RangeSerie-property-needSorting' class='name not-expandable'>needSorting</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-pointObject' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-property-pointObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-property-pointObject' class='name expandable'>pointObject</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The default action for series point data is to use array instead of point object\nunless desired to set point particul...</div><div class='long'><p>The default action for series point data is to use array instead of point object\nunless desired to set point particular field. This changes the default behaviour\nof getData template method\nDefault: false</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-serieCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-property-serieCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-property-serieCls' class='name expandable'>serieCls</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Chart.ux.Highcharts.Serie-method-constructor' class='name expandable'>Chart.ux.Highcharts.RangeSerie</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Chart.ux.Highcharts.Serie\" rel=\"Chart.ux.Highcharts.Serie\" class=\"docClass\">Chart.ux.Highcharts.Serie</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Chart.ux.Highcharts.Serie\" rel=\"Chart.ux.Highcharts.Serie\" class=\"docClass\">Chart.ux.Highcharts.Serie</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-arr_getDataPair' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-arr_getDataPair' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-arr_getDataPair' class='name expandable'>arr_getDataPair</a>( <span class='pre'>record, index</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>each data point in the series is represented in it's own x and y values ...</div><div class='long'><p>each data point in the series is represented in it's own x and y values</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-arr_getDataSingle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-arr_getDataSingle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-arr_getDataSingle' class='name expandable'>arr_getDataSingle</a>( <span class='pre'>record, index</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>single value data version of getData - Common category, individual y-data ...</div><div class='long'><p>single value data version of getData - Common category, individual y-data</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clear' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chart.ux.Highcharts.RangeSerie'>Chart.ux.Highcharts.RangeSerie</span><br/><a href='source/RangeSerie.html#Chart-ux-Highcharts-RangeSerie-method-getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.RangeSerie-method-getData' class='name expandable'>getData</a>( <span class='pre'>record, index</span> ) : Object|Array|Number</div><div class='description'><div class='short'>getData is the core mechanism for transferring from Store's record data into the series data array. ...</div><div class='long'><p>getData is the core mechanism for transferring from Store's record data into the series data array.\nThis routine acts as a Template Method for any series class, i.e. any new series type class must\nsupport this method.</p>\n\n<p>Generally, you don't need to override this method in the config because this method is internally\ncreated once the serie class is instantiated. Depending on whether <em>xField</em>, <em>yField</em> and\n<em>colorField</em> are defined, the class constructor creates a <em>getData</em> method which either returns a single value,\ntuple array or a data point object. This is done for performance reason. See Highcharts API document\n<a href=\"http://api.highcharts.com/highcharts#Series.addPoint()\">Series.addPoint</a> for more details.</p>\n\n<p>If your data model requires specific data processing in the record data, then you may need to\noverride this method. The return for the method must confine to the <a href=\"http://api.highcharts.com/highcharts#Series.addPoint()\">Series.addPoint</a>\nprototype. Note that if this method is manually defined, there is no need to define field name options\nbecause this can be specified inside the implementation anyway</p>\n\n<pre><code>series: [{\n    type: 'spline',\n    // Return avg y values\n    getData: function(record) {\n        return (record.data.y1 + record.data.y2) / 2;\n    }\n}],\nxField: 'time',\n....\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'><p>Store's record which contains the series data at particular instance</p>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>the index value of the record inside the Store</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object|Array|Number</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Chart.ux.Highcharts.Serie-method-getData' rel='Chart.ux.Highcharts.Serie-method-getData' class='docClass'>Chart.ux.Highcharts.Serie.getData</a></p></div></div></div><div id='method-obj_getData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-obj_getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-obj_getData' class='name expandable'>obj_getData</a>( <span class='pre'>record, index</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>object style of getData ...</div><div class='long'><p>object style of getData</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onPointClick' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-onPointClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-onPointClick' class='name expandable'>onPointClick</a>( <span class='pre'>evt</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-resolveColor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-method-resolveColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-method-resolveColor' class='name expandable'>resolveColor</a>( <span class='pre'>colorField, record, dataPtIdx</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Resolve color based on the value of colorField ...</div><div class='long'><p>Resolve color based on the value of colorField</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>colorField</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>dataPtIdx</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-pointclick' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chart.ux.Highcharts.Serie' rel='Chart.ux.Highcharts.Serie' class='defined-in docClass'>Chart.ux.Highcharts.Serie</a><br/><a href='source/Serie.html#Chart-ux-Highcharts-Serie-event-pointclick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chart.ux.Highcharts.Serie-event-pointclick' class='name expandable'>pointclick</a>( <span class='pre'>serie, point, record, evt, eOpts</span> )</div><div class='description'><div class='short'>Fires when the point of the serie is clicked. ...</div><div class='long'><p>Fires when the point of the serie is clicked.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serie</span> : <a href=\"#!/api/Chart.ux.Highcharts.Serie\" rel=\"Chart.ux.Highcharts.Serie\" class=\"docClass\">Chart.ux.Highcharts.Serie</a><div class='sub-desc'><p>the serie where is fired</p>\n</div></li><li><span class='pre'>point</span> : Object<div class='sub-desc'><p>the point clicked</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.Record<div class='sub-desc'><p>the record associated to the point</p>\n</div></li><li><span class='pre'>evt</span> : Object<div class='sub-desc'><p>the event param</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n</div></li></ul></div></div></div></div></div></div></div>","mixedInto":[],"statics":{"property":[],"css_mixin":[],"event":[],"method":[],"css_var":[],"cfg":[]},"requires":[],"linenr":1,"parentMixins":["Ext.util.Observable"],"superclasses":["Ext.Base","Chart.ux.Highcharts.Serie"],"code_type":"ext_define","inheritable":null,"singleton":false,"override":null,"subclasses":["Chart.ux.Highcharts.AreaRangeSerie","Chart.ux.Highcharts.AreaSplineRangeSerie","Chart.ux.Highcharts.ColumnRangeSerie"],"members":{"property":[{"meta":{"private":true},"owner":"Chart.ux.Highcharts.RangeSerie","name":"needSorting","id":"property-needSorting","tagname":"property"},{"meta":{"private":true},"owner":"Chart.ux.Highcharts.Serie","name":"pointObject","id":"property-pointObject","tagname":"property"},{"meta":{"private":true},"owner":"Chart.ux.Highcharts.Serie","name":"serieCls","id":"property-serieCls","tagname":"property"}],"css_mixin":[],"event":[{"meta":{},"owner":"Chart.ux.Highcharts.Serie","name":"pointclick","id":"event-pointclick","tagname":"event"}],"method":[{"meta":{},"owner":"Chart.ux.Highcharts.Serie","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{"private":true},"owner":"Chart.ux.Highcharts.Serie","name":"arr_getDataPair","id":"method-arr_getDataPair","tagname":"method"},{"meta":{"private":true},"owner":"Chart.ux.Highcharts.Serie","name":"arr_getDataSingle","id":"method-arr_getDataSingle","tagname":"method"},{"meta":{"private":true},"owner":"Chart.ux.Highcharts.Serie","name":"clear","id":"method-clear","tagname":"method"},{"meta":{},"owner":"Chart.ux.Highcharts.RangeSerie","name":"getData","id":"method-getData","tagname":"method"},{"meta":{"private":true},"owner":"Chart.ux.Highcharts.Serie","name":"obj_getData","id":"method-obj_getData","tagname":"method"},{"meta":{"private":true},"owner":"Chart.ux.Highcharts.Serie","name":"onPointClick","id":"method-onPointClick","tagname":"method"},{"meta":{"private":true},"owner":"Chart.ux.Highcharts.Serie","name":"resolveColor","id":"method-resolveColor","tagname":"method"}],"css_var":[],"cfg":[{"meta":{},"owner":"Chart.ux.Highcharts.Serie","name":"colorField","id":"cfg-colorField","tagname":"cfg"},{"meta":{},"owner":"Chart.ux.Highcharts.RangeSerie","name":"dataIndex","id":"cfg-dataIndex","tagname":"cfg"},{"meta":{},"owner":"Chart.ux.Highcharts.RangeSerie","name":"maxDataIndex","id":"cfg-maxDataIndex","tagname":"cfg"},{"meta":{},"owner":"Chart.ux.Highcharts.RangeSerie","name":"minDataIndex","id":"cfg-minDataIndex","tagname":"cfg"},{"meta":{},"owner":"Chart.ux.Highcharts.Serie","name":"type","id":"cfg-type","tagname":"cfg"},{"meta":{},"owner":"Chart.ux.Highcharts.Serie","name":"visible","id":"cfg-visible","tagname":"cfg"},{"meta":{},"owner":"Chart.ux.Highcharts.Serie","name":"xField","id":"cfg-xField","tagname":"cfg"}]},"mixins":[],"html_meta":{},"files":[{"href":"RangeSerie.html#Chart-ux-Highcharts-RangeSerie","filename":"RangeSerie.js"}],"inheritdoc":null,"private":null,"name":"Chart.ux.Highcharts.RangeSerie","alternateClassNames":[],"id":"class-Chart.ux.Highcharts.RangeSerie","tagname":"class","component":false,"extends":"Chart.ux.Highcharts.Serie","uses":[]});