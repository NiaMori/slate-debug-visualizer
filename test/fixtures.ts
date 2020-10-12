import { basename, resolve } from 'path'
import { readdirSync, statSync } from 'fs'

export interface Fixutre {
  path: string,
  basename: string,
  module: unknown
}

export const fixtures = (pathSegments: string[], fn: (fixture: Fixutre) => void) => {
  const root = resolve(...pathSegments)
  const files = readdirSync(root)
  const dir = basename(root)

  describe(dir, () => {
    for (const name of files) {
      const path = resolve(root, name)
      const stat = statSync(path)

      if (stat.isDirectory()) {
        fixtures([...pathSegments, name], fn)
      } else if (stat.isFile()) {
        const match = /^(?<basename>[\w-]+)[.](fixture)[.]tsx?$/.exec(name)
        if (match && match.groups) {
          const { basename } = match.groups

          it(`${basename} `, function () {
            const module = require(path).default
  
            fn({ path, basename, module })
          })
        }
      }
    }
  })
}
