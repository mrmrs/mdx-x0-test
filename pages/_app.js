import React from 'react'
import { MDXProvider } from '@mdx-js/tag'

import H1 from '../markdown-components/H1'
import H2 from '../markdown-components/H2'
import H3 from '../markdown-components/H3'
import H4 from '../markdown-components/H4'
import Text from '../markdown-components/P'

const components = { 
  h1: H1,
  h2: H2,
  p: Text,
}

export default props =>
  <MDXProvider components={components}>
    <main {...props} />
  </MDXProvider>
