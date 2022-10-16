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
  doc: "function multiply(a, b) {\n  return a*b\n}\nmultiply(2, 2)",
  extensions
})

const editor = new EditorView({
  parent: document.getElementById('editor'),
  state: editorState
})

runButton.addEventListener('click', () => {
  const result = evaluate(editor.state.doc.toString())
  document.getElementById('console').innerText = result
});

function emptyEditor(view) {
  let text = view.state.doc.toString()
  let changes = []
  for (let next = 0; next < text.length; next++) {
    changes.push({from: next, to: next + 1})
  }
  view.dispatch({changes})
}

function evaluate(str:string): String {
  let result = ''
  try {
    result = eval(str)
  } catch (e) {
    console.log(e)
    result = e + '\n' + e.stack
  }
  return new String(result)
}
