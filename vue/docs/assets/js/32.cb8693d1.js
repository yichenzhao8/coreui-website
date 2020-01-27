(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{551:function(e,t,n){"use strict";n.r(t);var a=n(0),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Api",{attrs:{props:[["items","undefined","Array","slot_items"],["fields","undefined","Array","slot_fields"],["itemsPerPage","10","Number","Number of items per site, when pagination is enabled"],["activePage","undefined","Number","Sets active page, in case of using external pagination."],["pagination","false","Boolean/Object","Enables default pagination. Set to true for default setup or pass object with additional CPagination props."],["small, dark, striped, fixed, hover, border, outlined","false","Boolean","Sets style of the table."],["itemsPerPageSelect","false","Boolean/Object","slot_itemsPerPageSelect"],["columnFilter","false","Boolean/Object","slot_columnFilter"],["sorter","false","Boolean/Object","slot_sorter"],["tableFilter","false","Boolean/Object","slot_tableFilter"],["sorterValue","{ column: null, asc: 'true' }","Object","State of the sorter. Name key is column name, direction can be 'asc' or 'desc'. Set .sync modifier to track changes."],["tableFilterValue","undefined","String","Value of table filter. Set .sync modifier to track changes."],["columnFilterValue","undefined","Object","slot_columnFilterValue"],["header","true","Boolean","Set to false to remove table header."],["footer","false","Boolean","Displays table footer, which mirrors table header. (without column filter)"],["loading","false","Boolean","When set, table will have loading style: loading spinner and reduced opacity. When 'small' prop is enabled spinner will be also smaller."],["clickableRows","false","Boolean","Style table items as clickable."],["addTableClasses","undefined","String/Array/Object","Adds classes to table element."],["responsive","true","Boolean","Sats styling behavior to responsive."]],slots:[["{column name}-header","header name","Set custom cell in header of single column"],["sorting-icon","Arrow icon pointed down or up indicating sorting state of the column","slot_sorting-icon"],["{column name}-filter","column filter","Set custom cell content instead of default filter in single column."],["{column name}","default content","Set custom content generation pattern of column. Available scoped props: 'name', 'item', 'index'."],["details","undefined","Adds additional details row to each item. Available scoped props: 'item', 'index'."],["no-items-view","default empty table content","Sets custom empty table content."],["loading","default loading styling","Sets custom table loading state element."],["over-table","undefined","Set additional content between options row and table"],["caption","undefined","Set table caption."],["under-table","undefined","Set additional content between table and pagination"]],events:[["pages-change","number of pages","Emitted when total number of pages change."],["row-clicked","item, index","Emitted when table row is clicked."],["pagination-change","items per page","Emitted when pagination in itemsPerPageSelect value is changed."],["update:sorter-value","sorter value","Emitted when user changes sorter state."],["update:table-filter-value","table filter value","Emmited on table filter update"],["update:column-filter-value","column filter value","Emmited on column filter update."]]},scopedSlots:e._u([{key:"slot_items",fn:function(){return[e._v("\n    Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by '_classes' key and to single cell by '_cellClasses'."),n("br"),n("br"),e._v("\n\n    Example item:\n    "),n("CodeBlock",{attrs:{code:"{ name: 'John' , age: 12, _classes: 'bg-success', _cellClasses: { age: 'text-bold'}}"}}),e._v("\n\n    For column generation description watch fields prop\n  ")]},proxy:!0},{key:"slot_fields",fn:function(){return[e._v("\n    Prop for specific column declaration. If prop is not passed columns will be generated automatically based on keys of the first passed item except keys beginning with underscore ('_')"),n("br"),n("br"),e._v("\n\n\n    There are two ways to set columns by fields prop:"),n("br"),e._v(" "),n("ul",[n("li",[e._v("\n    String: array item define column name equal to item key."),n("br")]),e._v(" "),n("li",[e._v("\n    Object: array item is object with following keys available as column functionalities:\n    "),n("ul",[n("li",[e._v("key (required) - define column name equal to item key.")]),e._v(" "),n("li",[e._v("label - define visible label (override automatically generated labels)")]),e._v(" "),n("li",[e._v("_classes - adds classes to all cels in column")]),e._v(" "),n("li",[e._v("_style - adds styles to the column header (useful for defining widths)")]),e._v(" "),n("li",[e._v("sorter - disables sorting of the column when set to false")]),e._v(" "),n("li",[e._v("filter - removes filter from column when set to false")])]),e._v("\n\n    If label option (in column defined by object) is not used, labels will be generated automatically by converting kebab-case and snake_case to individual words and capitalizes each word.\n    ")])])]},proxy:!0},{key:"slot_itemsPerPageSelect",fn:function(){return[e._v("\n    Adds select element over table, which is used for control items per page in pagination.\n    In case of using external pagination listen to 'pagination-change' event.\n\n    If you want to customize this element, pass object with optional values:\n    "),n("ul",[n("li",[e._v("label - string - replaces default label text")]),e._v(" "),n("li",[e._v("values - array - custom array of pagination values")])])]},proxy:!0},{key:"slot_columnFilterValue",fn:function(){return[e._v("\n    Value of table filter. \n    To set pass object where keys are column names and values are filter strings e.g.\n    "),n("CodeBlock",{attrs:{code:"{ user: 'John', age: 12 }",language:"js"}}),e._v("\n    You can track state of this prop by setting .sync modifier\n  ")]},proxy:!0},{key:"slot_sorter",fn:function(){return[e._v("\n    Enables table sorting by column value. \n    Sorting will be performed corectly only if values in column are of one type: string or number.\n    "),n("br"),n("br"),e._v("\n    Sorter can be customized, by passing prop as object\n    with additional options as keys. Available options:\n    "),n("ul",[n("li",[e._v("external - Disable automatic sorting inside component.")]),e._v(" "),n("li",[e._v("resetable - Clicking on sorter have three states: ascending, descending and null. \n        That means that third click on sorter will disable sorting, \n        and restore table to original order.\n      ")])]),e._v("\n\n    Example:\n    "),n("CodeBlock",{attrs:{code:":sorter='{ external: true, resetable: true }'",language:"js"}})]},proxy:!0},{key:"slot_tableFilter",fn:function(){return[e._v("\n    When set, displays table filter above table, \n    allowing filtering by specific column.\n    "),n("br"),n("br"),e._v("\n    Column filter can be customized, by passing prop as object\n    with additional options as keys. Available options:\n    "),n("ul",[n("li",[e._v("external - Disable automatic filtering inside component.")]),e._v(" "),n("li",[e._v("lazy - Makes filter update only on change event.")])]),e._v("\n\n    Example:\n    "),n("CodeBlock",{attrs:{code:":tableFilter='{ external: true, lazy: true }'",language:"js"}})]},proxy:!0},{key:"slot_columnFilter",fn:function(){return[e._v("\n    When set, displays additional filter row between table header and items, \n    allowing filtering by specific column. \n    "),n("br"),n("br"),e._v("\n    Column filter can be customized, by passing prop as object\n    with additional options as keys. Available options:\n    "),n("ul",[n("li",[e._v("external - Disable automatic filtering inside component.")]),e._v(" "),n("li",[e._v("lazy - Makes filter update only on change event.")])]),e._v("\n\n    Example:\n    "),n("CodeBlock",{attrs:{code:":columnFilter='{ external: true, lazy: true }'",language:"js"}})]},proxy:!0},{key:"slot_sorting-icon",fn:function(){return[e._v("\n    Set custom sorting icon. Available scoped data: \n    "),n("ul",[n("li",[e._v("classes - classes generated to style sorting icon (opacity, animation, position). Use for custom icon.")]),e._v(" "),n("li",[e._v("state - 'asc' (when ascending), 'desc' (when descending) or 0 (when not sorted). Use for custom icon with your own UI convention.")])])]},proxy:!0}])})}),[],!1,null,null,null);t.default=l.exports}}]);