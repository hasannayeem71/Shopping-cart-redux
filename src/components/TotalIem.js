import React from 'react'

const TotalIem = ({totalItems}) => {
  return (
    <div className="flex justify-center items-center text-center">
    <div className="text-xl font-semibold">
      <p>Total Item</p>
      <p className="text-5xl">{totalItems}</p>
    </div>
  </div>
  )
}

export default TotalIem