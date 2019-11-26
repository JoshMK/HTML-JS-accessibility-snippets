# HTML-JS-accessibility-snippets

Code to snag for commonly used tags / js widgets with appropriate aria labels/tags/functionality

## Inline SVGs as Non-Decorative Images
### References

- [https://www.w3.org/TR/SVG11/struct.html#DescriptionAndTitleElements]
- [https://www.deque.com/blog/creating-accessible-svgs/]

### Example:

```
<svg role="img" aria-labelledby="svgTitle-0 svgDesc-0"> <!-- index-based ids for looped/mapped exports -->
<g><title id="svgTitle-0">Halo's a Pretty Cool Guy</title> <!-- make sure 'title' is the first child of the parent element -->
<desc id="svgDesc-0">He kills aliens and doesn't afraid of anything.</desc></g>
</svg>
```
