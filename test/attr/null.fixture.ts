import { TestCase } from '..'

const testCase: TestCase = {
  input: {
    children: [],
    'null-attr-key': null,
  },

  output: {
    kind: { tree: true },

    root: {
      children: [
        {
          children: [],
          items: [
            {
              emphasis: 'style1',
              text: 'null-attr-key: '
            },
            {
              text: 'null'
            }
          ]
        }
      ],

      items: [{
        emphasis: 'style1',
        text: 'Element'
      }]
    }
  }
}

export default testCase
