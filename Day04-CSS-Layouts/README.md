# Flexbox Layout, Responsive Units and Media Queries

## Flexbox

Flexbox is a one-dimensional layout system used to arrange elements in rows or columns.

### Enable Flexbox

```css
display:flex;
```

Parent → Flex Container

Children → Flex Items

---

### flex-direction

```css
flex-direction:row;
flex-direction:column;
flex-direction:row-reverse;
flex-direction:column-reverse;
```

Controls item direction.

---

### justify-content

Aligns items along the main axis.

```css
justify-content:flex-start;
justify-content:center;
justify-content:flex-end;
justify-content:space-between;
justify-content:space-around;
justify-content:space-evenly;
```

---

### align-items

Aligns items along the cross axis.

```css
align-items:flex-start;
align-items:center;
align-items:flex-end;
align-items:stretch;
```

---

### Perfect Centering

```css
display:flex;
justify-content:center;
align-items:center;
```

Used for login forms, hero sections and modals.

---

### gap

```css
gap:20px;
```

Adds spacing between flex items.

---

### flex-wrap

```css
flex-wrap:wrap;
```

Moves items to the next line when space is insufficient.

---

### flex-grow

```css
flex-grow:1;
```

Allows items to take available space.

---

### flex-shrink

```css
flex-shrink:1;
```

Controls shrinking when space becomes limited.

---

### flex-basis

```css
flex-basis:200px;
```

Sets the initial size of a flex item.

---

### flex

Shorthand property.

```css
flex:1 1 200px;
```

Equivalent to:

```css
flex-grow:1;
flex-shrink:1;
flex-basis:200px;
```

---

### order

```css
order:1;
order:2;
order:3;
```

Changes visual order without changing HTML structure.

---

## Responsive Units

Responsive units adjust according to screen or parent size.

### Percentage (%)

```css
width:50%;
```

Relative to parent element.

---

### Viewport Width (vw)

```css
width:50vw;
```

Relative to viewport width.

```css
width:100vw;
```

Full screen width.

---

### Viewport Height (vh)

```css
height:100vh;
```

Relative to viewport height.

Commonly used for hero sections.

---

### em

```css
font-size:2em;
```

Relative to parent font size.

---

### rem

```css
font-size:2rem;
```

Relative to root (html) font size.

Preferred for modern websites.

---

### Responsive Images

```css
img{
    max-width:100%;
    height:auto;
}
```

Prevents image overflow.

---

## Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Purpose:

* Uses actual device width.
* Enables responsive layouts.
* Required for Media Queries to behave correctly on mobile devices.

---

## Media Queries

Media Queries apply CSS only when a condition becomes true.

### Syntax

```css
@media(max-width:768px){

}
```

Meaning:

```text
Apply CSS when width is 768px or less.
```

---

### Responsive Navbar

```css
@media(max-width:768px){

    nav{
        flex-direction:column;
    }

}
```

Desktop:

```text
Home About Contact
```

Mobile:

```text
Home
About
Contact
```

---

### Responsive Hero Section

```css
@media(max-width:768px){

    .hero{
        flex-direction:column;
        text-align:center;
    }

}
```

Desktop:

```text
Text      Image
```

Mobile:

```text
Text
Image
```

---

### Responsive Cards

```css
@media(max-width:768px){

    .cards{
        flex-direction:column;
    }

}
```

Cards stack vertically on smaller screens.

---

## Common Breakpoints

```css
@media(max-width:1200px)
```

Large Desktop

```css
@media(max-width:992px)
```

Tablet

```css
@media(max-width:768px)
```

Small Tablet / Mobile

```css
@media(max-width:576px)
```

Mobile

---

## Testing Responsiveness

1. Open browser.
2. Press F12.
3. Click Device Toolbar (📱).
4. Select a mobile device.
5. Observe layout changes.

---

## Summary

```css
display:flex;
flex-direction;
justify-content;
align-items;
gap;
flex-wrap;
flex-grow;
flex-shrink;
flex-basis;
flex;
order;

%;
vw;
vh;
em;
rem;

@media(max-width:768px)
```

### Key Points

* Flexbox is used for one-dimensional layouts.
* `justify-content` aligns along the main axis.
* `align-items` aligns along the cross axis.
* `gap` adds spacing.
* `flex-wrap` creates responsive rows.
* `flex-grow`, `flex-shrink`, and `flex-basis` control sizing.
* `%`, `vw`, `vh`, `em`, and `rem` create responsive designs.
* Viewport meta tag enables proper scaling.
* Media Queries adapt layouts for different screen sizes.
* Responsive design ensures usability across mobile, tablet, and desktop devices.
