# Keyboard focus trap (especially useful for modals)

[![version](https://img.shields.io/github/release/hchiam/keyboard-focus-trap?style=flat-square)](https://github.com/hchiam/keyboard-focus-trap/releases) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/hchiam/keyboard-focus-trap/blob/master/LICENSE) [![HitCount](http://hits.dwyl.com/hchiam/keyboard-focus-trap.svg)](http://hits.dwyl.com/hchiam/keyboard-focus-trap)

[Live demo](https://codepen.io/hchiam/pen/NWxbBdr)

[Example usage](https://github.com/hchiam/keyboard-focus-trap/blob/master/demo.html)

```html
<script
  src="https://cdn.jsdelivr.net/gh/hchiam/keyboard-focus-trap@1.1.0/keyboard-focus-trap.js"
  integrity="sha384-5PnYzry1hKZM375/B2mrZCP6CiJ5rt7ed+J5B3t0U/MZ2NjRU2S/O7bKhNwF06hX"
  crossorigin="anonymous"
></script>
```

```bash
bash get-integrity.sh
```

## Inspirations for this

- <https://github.com/udacity/ud891/tree/9c43eae0e158718703d96ab96f8b2999f69272b2/lesson2-focus/07-modals-and-keyboard-traps/solution>

- <https://gomakethings.com/how-to-get-the-first-and-last-focusable-elements-in-the-dom>

## Caveat/gotcha

<https://stackoverflow.com/questions/44452084/how-to-keep-focus-within-modal-dialog/44481275#44481275>

May not work well with web components and shadow DOM, but can be overcome with custom code.
