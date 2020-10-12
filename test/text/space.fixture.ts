import { TestCase } from '..'

const testCase: TestCase = {
  input: {
    text: 'text-content with spaces'
  },

  output: {
    kind: { tree: true },

    root: {
      children: [],

      items: [{
        text: 'Text ',
        emphasis: 'style1'
      }, {
        text: '"text-content with spaces"'
      }]
    }
  }
}

export default testCase
