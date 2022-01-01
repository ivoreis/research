import Index, { meta } from '../../articles/soil-protocols-explainer/index.md'
import references from '../../articles/soil-protocols-explainer/references'
import { Article } from '@carbonplan/layouts'

const Content = () => (
  <Article references={references} meta={meta}>
    <Index />
  </Article>
)

export default Content
