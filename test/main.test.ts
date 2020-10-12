import { getVisualizationData } from '../src/index'
import { foreachTestCase } from '.'

describe('getVisualizationData', () => {
  foreachTestCase(({ input, output }) => {
    expect(getVisualizationData(input)).toEqual(output)
  })
})
