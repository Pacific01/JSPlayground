import {basicSetup, EditorView} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"

const editor = new EditorView({
  extensions: [basicSetup, javascript()],
  parent: document.getElementById('editor')
})

const console = new EditorView({
  extensions: [basicSetup, javascript()],
  parent: document.getElementById('console')
})

const runButton = document.getElementById('runButton');

runButton.addEventListener('click', () => {
  window.console.log('Interpreting');

  console.contentDOM = "asdasd"
});
