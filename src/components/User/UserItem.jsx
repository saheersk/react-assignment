import React from 'react'

function UserItem({email, name}) {
  return (
    <div className='bg-blue-800 mb-5 text-white text-center'>
      <h1 className='text-xl'>{name}</h1>
      <h6 className='text-lg'>{email}</h6>
    </div>
  )
}

export default UserItem