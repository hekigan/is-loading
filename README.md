is-loading
==========

Simple jQuery plugin to show visual feedback when loading data or any action that would take time

[Full documentation and examples here](http://hekigan.github.io/is-loading/ "Documentation and examples")

__Quick start__

Basic use:
```javascript
$( "selector" ).isLoading();
```

Stop:
```javascript
$( "selector" ).isLoading( "hide" );
```

Add a text in the loader and change the location
```javascript
$( "selector" ).isLoading({ text: "Loading", position: "inside" });
```

Add a text in the loader and disable some extra elements
```javascript
$( "selector" ).isLoading({
    text:       "Loading", 
    disableOthers: [
        $( "#load-in-div .btn" )
    ]
});
```

Use overlay:
```javascript
$.isLoading({ text: "Loading" });
```

Use overlay on element:
```javascript
$( "selector" ).isLoading({
    text:       "Loading",
    position:   "overlay"
});
```


Default options:

```javascript
defaults = {
    'position': "right",        // right | inside | overlay
    'text': "",                 // Text to display next to the loader
    'class': "icon-refresh",    // loader CSS class
    'tpl': '<span class="isloading-wrapper %wrapper%">%text%<i class="%class% icon-spin"></i></span>',
    'disableSource': true,      // true | false
    'disableOthers': []
};
```
