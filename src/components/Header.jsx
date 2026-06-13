import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function Header() {
  return (
      <nav className='py-4 px-4  flex justify-between items-center'>
        <Link>
            <img src='./logo.png' className='h-20 px-5'/>
        </Link>
       {/* <Button variant='outline'>Login</Button> */}
       {/* <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show> */}
      </nav>
  )
}

export default Header