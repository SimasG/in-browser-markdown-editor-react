https://github.com/remarkjs/react-markdown
https://marked.js.org/
https://betterprogramming.pub/create-your-own-markdown-editor-with-react-6906ea2b6c2

1. Style setup -> DONE
2. Layout setup (no need to polish the styles perfectly) -> DONE
3. MD library setup -> WIP

TODO: Fix small things

- sidebar transition

Animated Slide Out Sidebar Navigation Menu Tutorial with HTML5 and CSS3: https://www.youtube.com/watch?v=IOOtDmh-NZw&ab_channel=w3newbie

ACTION -> clicking on the preview button
if (vw < 768) {
if (markdown container contains "open") {
remove "open"
markdown container -> display: none
preview container -> display: block
}
else if (markdown container does not contain "open") {
add "open"
markdown container -> display: block
preview container -> display: none
}
else {

}
}
