import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {telephone} = useParams();
    
  return (
    <div>
      <div className=''>
        My telephone number is: <br /> {telephone}
      </div>
    </div>
  )
}

export default UserDetails