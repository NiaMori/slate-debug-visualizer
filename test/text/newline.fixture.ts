import { TestCase } from '..'

const testCase: TestCase = {
  input: {
    text: 'text-content with \n newline'
  },

  output: {
    kind: { tree: true },

    root: {
      children: [],

      items: [{
        text: 'Text ',
        emphasis: 'style1'
      }, {
        text: '"text-content with \\n newline"'
      }]
    }
  }
}

export default testCase
