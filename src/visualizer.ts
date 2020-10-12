import { Range, Node, Editor, Element, Text } from 'slate'
import { TreeNodeItem, TreeNode, TreeVisualizationData } from '@hediet/debug-visualizer-data-extraction'

export interface VisualizableEditor {
  getVisualizationData: () => TreeVisualizationData
}

export interface Visualizer {
  getVisualizationData: (node: Node) => TreeVisualizationData,
  withVisualization: <T extends Editor>(editor: T) => T & VisualizableEditor
}

export interface AttributeToStringProps {
  node: Node,
  key: string,
  data: unknown
}

export interface VisualizerOptions {
  attrToString?: (props: AttributeToStringProps) => string,
  markSelectedNode?: boolean
}

export const configureVisualizer = (options: VisualizerOptions) : Visualizer => {
  const {
    attrToString: attrToStringUserProvided = () => '',
    markSelectedNode = true
  } = options

  const attrToString = (props: AttributeToStringProps): string => {
    const resultFromUser = attrToStringUserProvided(props)
    if (resultFromUser) {
      return resultFromUser
    }

    const { data } = props

    if (data === null) {
      return 'null'
    }

    if (data === undefined) {
      return 'undefined'
    }

    if (Range.isRange(data)) {
      const { focus, anchor } = data
      return `anchor: ([${anchor.path}], ${anchor.offset}) focus: ([${focus.path}], ${focus.offset})`
    }
    
    if (['string', 'number', 'boolean', 'object'].includes(typeof data)) {
      return JSON.stringify(data)
    }

    return '[Unknown Field]'
  }

  const getVisualizationData = (node: Node) : TreeVisualizationData => {
    const attr = (key: string, value: string) : TreeNodeItem[] => {
      return [
        { text: key + ': ', emphasis: 'style1' },
        { text: value }
      ]
    }

    const iter = (node: Node) : TreeNode => {
      const items: TreeNodeItem[] = []
      const children: TreeNode[] = []

      if (Editor.isEditor(node)) {
        items.push({
          text: 'Editor',
          emphasis: 'style1'
        })
      } else if (Element.isElement(node)) {
        items.push({
          text: typeof node.type === 'string' ? node.type : 'Element',
          emphasis: 'style1'
        })
      } else if (Text.isText(node)) {
        items.push({
          text: 'Text ',
          emphasis: 'style1'
        })

        items.push({
          text: attrToString({ node, key: 'text', data: node.text })
        })
      }

      for (const key in node) {
        if (['children', 'type', 'text'].includes(key)) {
          continue
        }

        if (Editor.isEditor(node) && ['operations', 'marks', 'history'].includes(key)) {
          continue
        }

        if (typeof node[key] === 'function') {
          continue
        }

        children.push({
          children: [],
          items: attr(key, attrToString({ node, key, data: node[key] }))
        })
      }

      if (!Text.isText(node)) {
        const childrenNodes = node.children.map(iter).map((treeNode, index) => {
          return Object.assign({}, treeNode, {
            items: [{ text: `[${index}]-`, emphasis: 'style1' }, ...treeNode.items]
          })
        })

        children.push(...childrenNodes)
      }

      return {
        children,
        items
      }
    }

    const tree: TreeVisualizationData = {
      kind: { tree: true },
      root: iter(node)
    }

    if (markSelectedNode && Editor.isEditor(node) && node.selection && Range.isCollapsed(node.selection)) {
      const { anchor } = node.selection
      const { path } = anchor

      let it = tree.root
      for (const idx of path) {
        for (const child of it.children) {
          if (child.items[0].text === `[${idx}]-`) {
            it = child
            break
          }
        }
      }
      it.isMarked = true
    }

    return tree
  }

  const withVisualization = <T extends Editor>(editor: T) : T & VisualizableEditor => {
    const e = editor as T & VisualizableEditor

    e.getVisualizationData = () => {
      return getVisualizationData(e)
    }

    return e
  }

  return {
    getVisualizationData,
    withVisualization
  }
}

export const {
  getVisualizationData,
  withVisualization
} = configureVisualizer({})
