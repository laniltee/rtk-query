import React, { useState } from 'react'
import { Button, Select, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useGetUsersQuery } from '../api/users'
import OrganizationDrawer from './organizationDrawer'

const OrganizationSelector = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, error, isLoading } = useGetUsersQuery()
  const [visible, setVisible] = useState(false)

  const [selectedOrganization, setSelectedOrganization] = useState(undefined)

  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Select
        style={{ width: 120 }}
        loading={isLoading}
        dropdownMatchSelectWidth={false}
        value={selectedOrganization}
        onChange={(e) => setSelectedOrganization(e)}
        placeholder="Select Org"
      >
        {data &&
          data.map((user) => (
            <Select.Option
              key={`user_${user.id}`}
              id={`user_${user.id}`}
              value={user.id.toString()}
            >
              {user.name}
            </Select.Option>
          ))}
      </Select>
      <Tooltip title="search">
        <Button
          onClick={showDrawer}
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
        />
      </Tooltip>
      <OrganizationDrawer
        visible={visible}
        onClose={onClose}
        selectedOrganization={selectedOrganization}
      />
    </>
  )
}

export default OrganizationSelector
