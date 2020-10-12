import { TestCase } from '..'

const testCase: TestCase = {
  input: {
    children: [],
    'undefined-attr-key': undefined,
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
              text: 'undefined-attr-key: '
            },
            {
              text: 'undefined'
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
