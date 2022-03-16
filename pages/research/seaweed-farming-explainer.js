import Index, { meta } from '../../articles/seaweed-farming-explainer/index.md'

import references from '../../articles/seaweed-farming-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta} displayTitle={null}>
    <Index />
  </Article>
)

export default Content
