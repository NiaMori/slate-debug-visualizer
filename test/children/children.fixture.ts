import { TestCase } from '..'

import { createEditor } from 'slate'

const testCase: TestCase = {
  input: {
    ...createEditor(),

    children: [{
      children: [{
        text: 'text-in-paragraph'
      }],
      type: 'Paragraph'
    }, {
      children: [{
        text: 'text-in-element'
      }]
    }],

    selection: {
      anchor: {
        path: [0, 0],
        offset: 0
      },
      focus: {
        path: [0, 0],
        offset: 0
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
          text: 'anchor: ([0,0], 0) focus: ([0,0], 0)'
        }]
      }, {
        items: [{
          text: '[0]-',
          emphasis: 'style1'
        }, {
          text: 'Paragraph',
          emphasis: 'style1'
        }],
        children: [{
          isMarked: true,
          items: [{
            text: '[0]-',
            emphasis: 'style1'
          }, {
            text: 'Text ',
            emphasis: 'style1'
          }, {
            text: '"text-in-paragraph"'
          }],
          children: [],
        }],
      }, {
        items: [{
          text: '[1]-',
          emphasis: 'style1'
        }, {
          text: 'Element',
          emphasis: 'style1'
        }],
        children: [{
          items: [{
            text: '[0]-',
            emphasis: 'style1'
          }, {
            text: 'Text ',
            emphasis: 'style1'
          }, {
            text: '"text-in-element"'
          }],

          children: []
        }],
      }],

      items: [{
        emphasis: 'style1',
        text: 'Editor'
      }]
    }
  }
}

export default testCase
