import { TestCase } from '..'

const testCase: TestCase = {
  input: {
    children: [],
    'string-attr-key': 'string-attr-value',
    'number-attr-key': 1024,
    'object-attr-key': { a: 'string-value', b: 1024 },
    'boolean-attr-key': true,
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
              text: 'string-attr-key: '
            },
            {
              text: '"string-attr-value"'
            }
          ]
        },
        {
          children: [],
          items: [
            {
              emphasis: 'style1',
              text: 'number-attr-key: '
            },
            {
              text: '1024'
            }
          ]
        },
        {
          children: [],
          items: [
            {
              emphasis: 'style1',
              text: 'object-attr-key: '
            },
            {
              text: '{"a":"string-value","b":1024}'
            }
          ]
        },
        {
          children: [],
          items: [
            {
              emphasis: 'style1',
              text: 'boolean-attr-key: '
            },
            {
              text: 'true'
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
