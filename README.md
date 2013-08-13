Mono Bind-Tab Module
==================

This is Bind-Tab module for the Mono web framework.

Configuration
-------------

Besides the standard Mono module configuration options ('html', 'css', 'scripts'), the extra configuration options for this module are:

```JSON
{
    "container": "«jQuery selector»",
    "tabs": "«jQuery selector»",
    "options": {
        "classes": {
            "selected": "CSS class"
        },
        "first": "miid",
        "hash": true or false,
        "reuse": true or false
    }
}
```

where:

  * **container**: jQuery selector (can be an `#id` or a `.class`, for example) that specifies where the content from tabs will be loaded (e.g.: `#container`)
  * **tabs**: jQuery selector that identifies the tabs (e.g.: `li`)
  * **options**: an object containing options of bind-tab module config
  * **classes**: an object containing CSS classes for bind-tab module
  * **selected**: a string that represents a CSS class (e.g.: `active`)
  * **first**: miid that you want to load first (e.g.: `home_layout`)
  * **hash**: bool value. When it is `true` there will appear hash links (also, the tabs have to contain `data-hash` attributes)
  * **reuse**: bool value. When it is `true` the miids are loaded but never removed. They will be shown/hidden by the module.

HTML side
---------
Each tab item has to contain `data-miid` and `data-hash` atributes.
```HTML
<ul>
    <li data-miid="miid1" data-hash="hash1">Tab 1</li>
    <li data-miid="miid2" data-hash="hash2">Tab 2</li>
</ul>
```
  * **data-miid**: miid that will be linked to this tab item
  * **data-hash**: `#hash link` that will appear in browser address

Events
------

The module emits the following events:
<table>
   <thead>
     <tr>
       <th>
         <div>Event Name</div>
       </th>
       <th>
         <div>Description</div>
       </th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>tabActivated</td>
       <td>Emited when any tab is loaded completelly or shown by the module.</td>
     </tr>
   </tbody>
 </table>

# Changelog

### dev
 - Updated the module to the new version of the client script (M.js): `.onready` is deprecated.

### v0.1.5
 - Implemented `data-title` option. The window title will be set if `data-title` attribute is provided (Issue #2)
 - Fixed the problem with `tabActivated`: the module will wait until the miid loaded will emit `ready`.
 - Replaced simple quotes with double quotes

### v0.1.4
 - The empty of container was fixed.
 - Upgrated to Events version v0.1.1

### v0.1.3
 - `reuse` option was implemented

### v0.1.2
 - `tabActivated` event was implemented

### v0.1.1
 - Events and Bind were added in dependencies of module.
 - Process config function was removed
