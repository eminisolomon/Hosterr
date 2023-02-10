import React, { 
  useState, 
  useEffect,
} from 'react'
import { Images } from '../assets'
import { Button } from '../components'
import {
  useWindowSize,
  useMeasure,
} from '../hooks'
import { TABLET_SIZE } from '../constants'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { width, setWidth } = useWindowSize()
  const [rect, myRef]: any = useMeasure()

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])
  
  return(
    <div 
      className="py-4 sticky top-0 left-0 w-full z-50 flex justify-between bg-main"
      ref={myRef}
    >
      <div className="flex items-center relative">
        <img 
          src={Images.Logo}
          alt="logo"
        />
        <p className="ml-3 cursor-default text-sm py-1 px-3 rounded-full bg-gradient-to-r from-yellow-400 to-red-500">Hosterr is hiring!</p>
      </div>
      {width > TABLET_SIZE ? (
        <>
          <ul className="flex items-center">
            <li className="mx-2 text-lg animate-links">Plans</li>
            <li className="mx-2 text-lg animate-links">Find Domain</li>
            <li className="mx-2 text-lg animate-links">Why Hosterr</li>
          </ul>
          <div className="flex items-center">
            <a 
              href="#home" 
              className="mr-5 text-lg animate-links"
            >Sign in</a>
            <Button>Join Waitlist</Button>
          </div>
        </>
      ) : (
        <>
          {isOpen ? (
            <div className="border bg-white absolute top-2 -right-2 p-4">
              <img 
                src={Images.Close}
                alt="close button"
                className="absolute right-4 top-4 scale-150 cursor-pointe"
                onClick={() => setIsOpen(false)}
              />
              <ul className="flex flex-col items-center pb-3 border-b mb-2">
                <li className="mx-2 my-1 text-lg animate-links">Plans</li>
                <li className="mx-2 my-1 text-lg animate-links">Find Domain</li>
                <li className="mx-2 my-1 text-lg animate-links">Why Hosterr</li>
              </ul>
              <div className="flex flex-col items-center">
                <a 
                  href="#home" 
                  className="lg:mr-5 text-lg animate-links my-2"
                >Sign in</a>
                <Button>Join Waitlist</Button>
              </div>
            </div>
          ) : (
            <img 
              src={Images.HamburgerMenu}
              alt="Menu hamburger"
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </>
      )}
    </div>
  )
}