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
        "hash": true or false
        "resue": true or false
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
  * **resue**: bool value. When it is `true` the miids are loaded but never removed. They will be shown/hidden by the module.

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

The module emit the following events:
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
