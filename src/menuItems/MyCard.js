import { useContext } from 'react'
import { Card, Col } from 'antd'
import LocaleContext from '../contexts/localeContext'
import { useTranslation } from 'react-i18next'

const MyCard = () => {
  const locale = useContext(LocaleContext)
  const { t } = useTranslation()

  return (
    <Col lg={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
      <Card
        title="Card title"
        bordered={false}
        className="rounded-lg shadow-md"
      >
        <div className="text-center">
          {t('CARD_CONTENT')} {locale}
        </div>
      </Card>
    </Col>
  )
}

export default MyCard
