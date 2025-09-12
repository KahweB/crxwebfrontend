import React from 'react'
import DeviceList from '../components/DeviceList'

const page = () => {
  return (
    <div>
        <h1 className='text-lg font-semibold mb-4'>
            Cihazlar
        </h1>
        <DeviceList/>
    </div>
  )
}

export default page