import { Node } from 'slate'
import { TreeVisualizationData } from '@hediet/debug-visualizer-data-extraction'
import { fixtures } from './fixtures'

export interface TestCase {
  input: Node,
  output: TreeVisualizationData
}

export const foreachTestCase = (fn: (testcase: TestCase) => void) => {
  fixtures(['test'], ({ module }) => {
    const testCase = module as TestCase

    fn(testCase)
  })
}
