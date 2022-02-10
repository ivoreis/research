import { useState } from 'react'
import { Layout, Guide } from '@carbonplan/components'
import Main from '../../components/main'
import contents from '../../contents'

const Index = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Layout
      title={'research / carbonplan'}
      description={
        'Articles, tools, and commentary on carbon removal and climate solutions.'
      }
      card={'https://images.carbonplan.org/social/research.png'}
      links={'local'}
      metadata={`COUNT: ${contents.articles.length}`}
      nav={'research'}
      settings={{ value: expanded, onClick: () => setExpanded(!expanded) }}
    >
      <Main expanded={expanded} contents={contents.articles} />
    </Layout>
  )
}

export default Index
