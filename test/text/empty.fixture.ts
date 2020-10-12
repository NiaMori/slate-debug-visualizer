import { TestCase } from '..'

const testCase: TestCase = {
  input: {
    text: ''
  },

  output: {
    kind: { tree: true },

    root: {
      children: [],

      items: [{
        text: 'Text ',
        emphasis: 'style1'
      }, {
        text: '""'
      }]
    }
  }
}

export default testCase
