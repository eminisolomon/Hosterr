import React from 'react'
import { Images } from '../assets'
import { CONTENT } from '../content'
import { Button } from '../components'
import {  
  useForm,
} from '../hooks'

export const Main = () => {
  const [values, handleChange] = useForm({ email: '' })
  const { h1, p, info } = CONTENT
  
  return(
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
      <div className="lg:w-full lg:max-w-[50rem] flex flex-col lg:items-start lg:pr-8 mt-5">
        <h1 className="text-5xl font-extrabold">{h1}</h1>
        <p className="mt-3">{p}</p>
        <form className="flex flex-col sm:flex-row w-full mt-3 mb-5">
          <input  
            type="email"
            name="email"
            placeholder="Enter email address"
            value={values.email}
            onChange={handleChange}
            className="w-full sm:max-w-[20rem] h-12 mb-3 sm:mb-0 border indent-3 mr-3 focus:outline-none"
          />
          <Button>Join Waitlist</Button>
        </form>
        <div className="flex items-center">
          <img 
            src={info.image}
            alt="checkmark"
          />
          <p className="ml-3">{info.p}</p>
        </div>
      </div>
      <div className="h-full w-full -top-2 flex justify-center lg:justify-end px-12">
        <div className="w-96 relative">
          <img 
            src={Images.BlueShape}
            alt="blue shape"
            className="absolute w-full z-10 -rotate-36"
          />
          <img 
            src={Images.PinkShape}
            alt="pink shape"
            className="absolute w-full z-20 -rotate-24"
          />
          <img 
            src={Images.PurpleShape}
            alt="purple shape"
            className="absolute w-full z-30 -rotate-12"
          />
          <img 
            src={Images.HeroImage}
            alt="Hero"
            className="relative w-full z-40"
          />
        </div>
      </div>
    </div>
  )
}