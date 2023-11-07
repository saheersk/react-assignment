import React from 'react'
import UserItem from './UserItem'

function UserData() {
  return (
    <div className='px-4 py-4'>
      <UserItem email={"admin1@example.com"} name={"Admin1"} />
      <UserItem email={"admin2@example.com"} name={"Admin2"} />
    </div>
  )
}

export default UserData