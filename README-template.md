https://github.com/remarkjs/react-markdown
https://marked.js.org/
https://betterprogramming.pub/create-your-own-markdown-editor-with-react-6906ea2b6c2

1. Style setup -> DONE
2. Layout setup (no need to polish the styles perfectly) -> DONE
3. MD library setup -> DONE
4. CRUD -> DONE
5. Authentication -> WIP
6. Deploy

Nasty bugs:

- Populate sidebar with files
- Fix markdown editing (crashing with onAuthStateChanged)

TODO: (maybe) fix small things

- sidebar transition
- Markdown (block quote, code block)
- Auto refresh for newly created/deleted/updated firestore collections/documents -> DONE (with Firebase hooks)
- Proper id usage (UUIDs instead of incrementing numbers to Firestore IDs) -> DONE
- Different background for the active document in the sidebar
- After creating the doc, modal disappears -> DONE
- Change date updated format
- Input validation for file names (must be .md)
- Make the width of the file name input div only as big as the file name itself
- Hide my api key & auth domain in firebase-config

Future Considerations:

- Experiment with UseContext for setting global state next time (a lot of copy-pasting & spaghetti now)

Q's:

- Can I pass props to a helper hook (e.g. useFetchFiles.js)?
