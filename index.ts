import { EditorState } from '@codemirror/state'
import { EditorView, lineNumbers } from '@codemirror/view'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { javascript } from "@codemirror/lang-javascript"

const extensions = [dracula, javascript(), lineNumbers()]

const editorState = EditorState.create({
  extensions
})

const editor = new EditorView({
  parent: document.getElementById('editor'),
  state: editorState
})

const consoleState = EditorState.create({
  extensions
})

const consoleEditor = new EditorView({
  parent: document.getElementById('console'),
  state: consoleState
})

const runButton = document.getElementById('runButton');

runButton.addEventListener('click', () => {
  window.console.log('Interpreting');

  console.contentDOM = "asdasd"
});
