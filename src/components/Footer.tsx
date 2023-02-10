import React from 'react'
import { Images } from '../assets'

export const Footer = () => {
  return(
    <div className="py-5 mt-10 flex flex-col sm:flex-row justify-between">
      <ul className="flex items-center">
        <li className="mx-2 text-lg animate-links">Facebook</li>
        <li className="mx-2 text-lg animate-links">Instagram</li>
        <li className="mx-2 text-lg animate-links">Twitter</li>
      </ul>
      <div className="flex mt-5 sm:mt-0">
        <img 
          src={Images.HelpAvatar}
          alt="avatar"
        />
        <div className="ml-3">
          <p>Have any questions?</p>
          <p className="font-semibold">Talk to a specialist</p>
        </div>
      </div>
    </div>
  )
}