import { Row } from 'antd'
import MyCard from './MyCard'

const SiteCardWrapper = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <MyCard />
        <MyCard />
        <MyCard />
      </Row>
    </div>
  )
}

export default SiteCardWrapper
