import React, { useCallback, useMemo, useState } from 'react'
import { withVisualization } from 'slate-debug-visualizer'
import { createEditor, Node } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

function App() {
  const editor = useMemo(() => {
    return withVisualization(withHistory(withReact(createEditor())))
  }, [])

  const [value, setValue] = useState<Node[]>([{
    children: [{ text: '' }]
  }])

  const onClick = useCallback(() => {
    // set breakpoint here
    console.log(editor)
  }, [])

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <button onClick={onClick}>
        Pause
      </button>

      <Editable placeholder={"type here..."}></Editable>
    </Slate>
  )
}

export default App
