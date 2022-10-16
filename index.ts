import {basicSetup, EditorView} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"

new EditorView({
  doc: "console.log('hello')\n",
  extensions: [basicSetup, javascript()],
  parent: document.getElementById('editor')
})
