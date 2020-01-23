# HTML-JS-accessibility-snippets

Code to snag for commonly used html chunks and js widgets with appropriate aria labels, tags, and functionality.

## Forms

### Notes

- Use a `<label for={name}>` tag for each `<input id="{name}">` field
- Wrap grouped controls with `<legend>` and `<fieldset>` when a higher level description (i.e., the legend) is necessary. Contextually obvious tags (i.e., `<select>`) don't need to be wrapped.
- `<input type='submit'>` and `<input type='reset'>` - always supply a `value=` attribute (screen readers read these aloud for context).
- `<button>` - always supply text between the opening/closing `</button>` tag or use a WCAG compliant substitute. These are: - <button id="text">Name</button> - <button id="al" aria-label="Name"></button> - <button id="alb" aria-labelledby="labeldiv"></button> - <button id="combo" aria-label="Aria Name">Name</button> - <button id="buttonTitle" title="Title"></button>
- use `<label>` for better accessibility/support instead of the `placeholder` attribute if possible.
- for the `placeholder` attribute, make sure its text contrast is adjusted for WCAG using custom CSS (the default values are noncompliant - see correcting code snippet below)

### Examples:

#### HTML - Standalone Label Examples

```
<label for="firstname">First name:</label>
<input type="text" name="firstname" id="firstname"><br>

<input type="checkbox" name="subscribe" id="subscribe">
<label for="subscribe">Subscribe to newsletter</label>
```

#### HTML - Standalone Button and Input Button Examples

```
<button type="submit">Submit</button>
<button type="button">Cancel</button>

<input type="submit" value="Submit">
<input type="button" value="Cancel">
```

#### HTML - Related Inputs Grouped with Fieldset

```
<fieldset>
<legend>Output format</legend>
  <div>
    <input type="radio" name="format" id="txt" value="txt" checked>
    <label for="txt">Text file</label>
  </div>
  <div>
    <input type="radio" name="format" id="csv" value="csv">
    <label for="csv">CSV file</label>
  </div>
</fieldset>
```

#### HTML - Related Inputs Grouped with role="group", id, and aria-labelledby={id}

```
<div role="group" aria-labelledby="shipping_head">
	<div id="shipping_head">Shipping Address:</div>
	<div>
		<label for="shipping_name">
      <span class="visuallyhidden">Shipping </span>Name:
    </label><br>
		<input type="text" name="shipping_name" id="shipping_name">
	</div>
</div>
<div role="group" aria-labelledby="billing_head">
	<div id="billing_head">Billing Address:</div>
	<div>
		<label for="billing_name">
      <span class="visuallyhidden">Billing </span>Name:
    </label><br>
		<input type="text" name="billing_name" id="billing_name">
	</div>
</div>
```

#### HTML - Select Grouped with optgroup and label attribute

```
<select>
	<optgroup label="8.01 Physics I: Classical Mechanics">
		<option value="8.01.1">Lecture 01: Powers of Ten</option>
		<option value="8.01.2">Lecture 02: 1D Kinematics</option>
		<option value="8.01.3">Lecture 03: Vectors</option>
	</optgroup>
	<optgroup label="8.02 Physics II: Electricity and Magnestism">
		<option value="8.02.1">Lecture 01: What holds our world together?</option>
		[…]
	</optgroup>
	[…]
</select>
```

#### CSS - Example Placeholder Color Contrast Adjusted for a White Background

```
::-webkit-input-placeholder {
	 color: #767676;
	 opacity: 1;
}

:-moz-placeholder { /* Firefox 18- */
	 color: #767676;
	 opacity: 1;
}

::-moz-placeholder {  /* Firefox 19+ */
	 color: #767676;
	 opacity: 1;
}

:-ms-input-placeholder {
	 color: #767676;
	 opacity: 1;
}
```

### References

- [https://webaim.org/techniques/forms/controls]
- [https://www.w3.org/WAI/tutorials/forms/labels/]

## Hamburger Menu

### Notes

- Use a semantic element for the burger (i.e. `<button>` - it has inbuilt keyboard functionality which is dope.)
- Make sure the text "menu" is included within the semantic element to give it meaning to SRs (it can be concealed visually for non-SR users with CSS.)
- If the hamburger menu uses any decorative symbols ('x', '-', etc.), make sure to set aria-hidden="true" for them (SR's will try to read them otherwise.)
- No consensus on whether or not to use `"role=navigation"` within `<nav>` elements. MDN says using `<nav>` will automatically communicate its role (preventing redundant readings), yet other sources such as the W3 wiki say to explicitly communicate the role for tech that relies on aria labels and doesn't support HTML5 (it's a wiki though, so it's unreliable.) A lot of articles advocating `<nav role="navigation">` are 5-6 years old, so it's unclear what SR/accessibility technology support for HTML5 is these days. Going w/ the MDN right now because I think fiery foxes are cute (but I'll gladly add it back if my SR research determines it's necessary.)

### Example:

#### HTML

```
<header>
  <nav> <!-- afaik role="navigation" is redundant here, use that for divs if you gotta --> <!-- provide specific role if multiple navs, for example here: role="Main" -->
    <button id="toggleMenu" aria-expanded="false" aria-controls="menu">Menu</button>
    <ul id="menu">
      <!-- menu items -->
    </ul>
  </nav>
</header>
```

#### JS

```
(function () {
const toggleMenu = document.querySelector('#toggleMenu');
const menu = document.querySelector('#menu');
//
toggleMenu.addEventListener('click', () => {
  if (menu.classList.contains('is-active')) {this.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-active');}
  else {menu.classList.add('is-active'); this.setAttribute('aria-expanded', 'true');}
});
})();
```

### References

- [https://www.a11ymatters.com/pattern/mobile-nav/]
- [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role]
- [https://www.w3.org/WAI/GL/wiki/Using_HTML5_nav_element]
- [https://www.weba11y.com/blog/2016/04/22/screen-reader-support-for-new-html5-section-elements/]

## Inline SVGs as Non-Decorative Images

### Example:

```
<svg role="img" aria-labelledby="svgTitle-{variableName}-0 svgDesc-{variableName}-0"> <!-- index-based ids for looped/mapped exports -->
<g><title id="svgTitle-{variableName}-0">Halo's a Pretty Cool Guy</title> <!-- make sure 'title' is the first child of the parent element -->
<desc id="svgDesc-{variableName}-0">He kills aliens and doesn't afraid of anything.</desc></g>
</svg>
```

### References

- [https://www.w3.org/TR/SVG11/struct.html#DescriptionAndTitleElements]
- [https://www.deque.com/blog/creating-accessible-svgs/]

## Skip to Main Content Link

### Notes

- In cases where this link needs to be hidden for design reasons, use a library like WhatInput to hide it when not tab focused.
- setting 'tabindex=-1' on the 'main' element (or whatever element it skips to) is supposed to correct a bug preventing it from being focused without a tabindex attribute in older IE versions.

### Example:

#### HTML

```
<a className="app__skipNavLink" href="#main">Skip to main content</a>
<main id="main" tabindex="-1">{site content}</main>
```

#### CSS

```
.app__skipNavLink {
  z-index: -999;
  opacity: 0;
}

.app__skipNavLink:focus {
  opacity: 1;
  z-index: 999;
}
```

### References

- [https://stackoverflow.com/questions/11848351/accessibility-skip-navigation-doesnt-work]
- [https://www.jimthatcher.com/skipnav.htm] (linked from [https://www.w3.org/TR/WCAG20-TECHS/G1.html])
