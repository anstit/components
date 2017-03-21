<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## WSDatePicker

**Extends Component**

Renders a date picker component which is based on flatpickr.
Possible properties to set are the value as formatted string or Date object.
To specify a date format pls have a look at the flatpickr formatting rules.
You can set additional options to the flatpickr by passing the options property.
If you only want to display an icon instead of a input set prop iconOnly.

### constructor

**Parameters**

-   `props` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** React properties

### componentDidMount

Initialize the flatpickr with given options

Returns **void** 

### componentWillReceiveProps

Update flatpickr when prop's changed

**Parameters**

-   `props` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** React props

Returns **void** 

### componentWillUnmount

Destroy the flatpickr and all it's events and bindings

Returns **void** 

### onChange

Handle date selections and propagate the value via an custom change event and onChange callback

**Parameters**

-   `selectedDate` **[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)** The currently selected date
-   `value` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The date as string using the in props specified formatting
-   `$0` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 
    -   `$0.selectedDate`  

Returns **void** 

### render

Render the component

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 