import { EditorState } from '@codemirror/state'
import { EditorView, lineNumbers, keymap } from '@codemirror/view'
import { indentWithTab } from "@codemirror/commands"
import { dracula } from '@uiw/codemirror-theme-dracula'
import { javascript } from "@codemirror/lang-javascript"

const extensions = [
    dracula,
    javascript(),
    lineNumbers(),
    keymap.of([indentWithTab]),
]

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
