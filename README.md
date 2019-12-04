# HTML-JS-accessibility-snippets

code to snag for commonly used tags / js widgets with appropriate aria labels/tags/functionality

## Hamburger Menu

### Notes

- Use a semantic element for the burger (i.e. `<button>` - it has inbuilt keyboard functionality which is dope.)
- Make sure the text "menu" is included within the semantic element to give it meaning to SRs (it can be concealed visually for non-SR users with CSS.)
- If the hamburger menu uses any decorative symbols ('x', '-', etc.), make sure to set aria-hidden="true" for them (SR's will try to read them otherwise.)
- No consensus on whether or not to use `"role=navigation"` within `<nav>` elements. MDN says using `<nav>` will automatically communicate its role (preventing redundant readings), yet other sources such as the W3 wiki say to explicitly communicate the role for tech that relies on aria labels and doesn't support HTML5 (it's a wiki though, so it's unreliable.) A lot of articles advocating `<nav role="navigation">` are 5-6 years old, so it's unclear what SR/accessibility technology support for HTML5 is these days. Going w/ the MDN right now because I think fiery foxes are cute (but I'll gladly add it back if my SR research determines it's necessary.)

### References

- [https://www.a11ymatters.com/pattern/mobile-nav/]
- [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role]
- [https://www.w3.org/WAI/GL/wiki/Using_HTML5_nav_element]
- [https://www.weba11y.com/blog/2016/04/22/screen-reader-support-for-new-html5-section-elements/]

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

## Inline SVGs as Non-Decorative Images

### References

- [https://www.w3.org/TR/SVG11/struct.html#DescriptionAndTitleElements]
- [https://www.deque.com/blog/creating-accessible-svgs/]

### Example:

```
<svg role="img" aria-labelledby="svgTitle-(variableName)-0 svgDesc-(variableName)-0"> <!-- index-based ids for looped/mapped exports -->
<g><title id="svgTitle-(variableName)-0">Halo's a Pretty Cool Guy</title> <!-- make sure 'title' is the first child of the parent element -->
<desc id="svgDesc-(variableName)-0">He kills aliens and doesn't afraid of anything.</desc></g>
</svg>
```
