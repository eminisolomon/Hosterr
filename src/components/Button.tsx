import React from 'react'

export const Button: React.FC = ({ children }) => {
  return(
    <button className="rounded-md font-bold px-4 py-3 border flex justify-center items-center bg-blue text-white">
      {children}
    </button>
  )
}