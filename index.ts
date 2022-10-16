import { EditorState } from '@codemirror/state'
import { EditorView, lineNumbers, keymap } from '@codemirror/view'
import { indentWithTab } from "@codemirror/commands"
import { dracula } from '@uiw/codemirror-theme-dracula'
import { javascript } from "@codemirror/lang-javascript"
import Interpreter from 'js-interpreter'

const extensions = [
  dracula,
  javascript(),
  lineNumbers(),
  keymap.of([indentWithTab]),
]

const editorState = EditorState.create({
  doc: "function multiply(a, b) {\n  return a*b\n}\nvar m = multiply(2, 2)\nlog(m)",
  extensions
})

let editor = new EditorView({
  parent: document.getElementById('editor'),
  state: editorState
})

runButton.addEventListener('click', () => {
  console.log("EDITORVAL", editor.state.doc.toString())
  const result = evaluate(editor.state.doc.toString())
  document.getElementById('console').innerText = document.getElementById('console').innerText + '\n' + result
})

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
  let values = []
  try {

    const initFunc = (interpreter, globalObject) => {
      const wrapper = (text) => {
        values.push(text)
      }
      interpreter.setProperty(
        globalObject,
        'log',
        interpreter.createNativeFunction(wrapper)
      )
    }
    var myInterpreter = new Interpreter(str, initFunc)
    myInterpreter.run()
    result = values.join('\n')
  } catch (e) {
    result = e + '\n' + e.stack
  }
  return new String(result)
}
