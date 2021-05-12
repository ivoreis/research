import { Row, Column } from '@carbonplan/components'
import Scatter from '../scatter'
import assessmentAreas from './assessment-areas.json'
import projects from './projects.json'

const CommonPractice = () => {
  return (
    <Row
      columns={[6]}
      sx={{ height: ['550px', '250px', '250px', '250px'], my: [6, 6, 6, 7] }}
    >
      <Column
        start={[1, 1, 1, 1]}
        width={[6, 3, 3, 3]}
        sx={{ mb: [5, 0, 0, 0] }}
      >
        <Scatter
          data={assessmentAreas}
          title={'Assessment Areas'}
          legend1={'R2 = 0.97'}
          legend2={'RMSE= 4.94'}
        />
      </Column>
      <Column start={[1, 4, 4, 4]} width={[6, 3, 3, 3]}>
        <Scatter
          data={projects}
          title={'Projects'}
          legend1={'R2 = 0.94'}
          legend2={'RMSE = 9.71'}
        />
      </Column>
    </Row>
  )
}

export default CommonPractice
