import { TestCase } from '..'

import { createEditor } from 'slate'

const testCase: TestCase = {
  input: {
    ...createEditor(),

    children: [],

    selection: {
      anchor: {
        path: [0, 0],
        offset: 0
      },
      focus: {
        path: [0, 1],
        offset: 2
      }
    }
  },

  output: {
    kind: { tree: true },

    root: {
      children: [{
        children: [],
        items: [{
          text: 'selection: ',
          emphasis: 'style1'
        }, {
          text: 'anchor: ([0,0], 0) focus: ([0,1], 2)'
        }]
      }],

      items: [{
        emphasis: 'style1',
        text: 'Editor'
      }]
    }
  }
}

export default testCase
