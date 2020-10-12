import { TestCase } from '..'

const testCase: TestCase = {
  input: {
    children: []
  },

  output: {
    kind: { tree: true },

    root: {
      children: [],

      items: [{
        emphasis: 'style1',
        text: 'Element'
      }]
    }
  }
}

export default testCase
