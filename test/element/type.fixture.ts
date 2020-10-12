import { TestCase } from '..'

const testCase: TestCase = {
  input: {
    children: [],
    type: 'Paragraph'
  },

  output: {
    kind: { tree: true },

    root: {
      children: [],

      items: [{
        'emphasis': "style1",
        "text": "Paragraph"
      }]
    }
  }
}

export default testCase
