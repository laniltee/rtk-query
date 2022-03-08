import { Drawer, Skeleton } from 'antd'
import { useGetUserByIdQuery } from '../api/users'

const OrganizationDrawer = ({ onClose, visible, selectedOrganization }) => {
  // eslint-disable-next-line no-unused-vars
  const { data, error, isFetching } = useGetUserByIdQuery(
    selectedOrganization,
    {
      skip: !selectedOrganization,
    }
  )

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      {isFetching ? (
        <Skeleton.Input style={{ width: 200 }} active />
      ) : (
        <p className="mb-2">Owner Name: {data?.name}</p>
      )}
      {isFetching ? (
        <Skeleton.Input style={{ width: 200 }} active />
      ) : (
        <p className="mb-2">Company Name: {data?.company?.name}</p>
      )}
      {isFetching ? (
        <Skeleton.Input style={{ width: 200 }} active />
      ) : (
        <p className="mb-2">Catch Phrase: {data?.company?.catchPhrase}</p>
      )}
      {isFetching ? (
        <Skeleton.Input style={{ width: 200 }} active />
      ) : (
        <p className="mb-2">BS: {data?.company?.bs}</p>
      )}
    </Drawer>
  )
}

export default OrganizationDrawer
