import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import ShoppingCart from '../ShoppingCart'
import IconUser from '../IconUser'
import UserMenu from '../UserMenu'
import { HiBars2 } from 'react-icons/hi2';
import { Bars2Icon } from '@heroicons/react/24/outline'

const Navbar = () => {

  const context = useContext(ShoppingCartContext)
  const activeStyle = 'flex items-center justify-center bg-[rgb(28,28,28)] text-white rounded-lg h-[100%] w-[100%]'

  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(true)
    context.setIsUserMenuOpen(false)
  }

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        
        <>
          <IconUser/>
            <UserMenu>
              <div className='flex flex-col justify-between items-center w-[100%] h-[100%] rounded-lg bg-[rgb(18,18,18)]'>
                <div className='flex flex-col justify-center items-center m-5 md:m-3 w-[90%] h-[100%] rounded-lg bg-[rgb(40,40,40)] text-[rgb(123,123,123)]'>
                  
                  <div className='p-2 flex justify-center items-center h-[25%] w-[90%]'>
                    <li className='text-white font-bold text-auto p-2 box-border'>
                        User :  {parsedAccount?.name}
                    </li>
                  </div>
                  
                  <div className='h-[25%] w-[90%]'>
                    <li className='flex justify-center items-center h-[100%] w-[100%]'>
                      <NavLink
                        to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => context.toggleUserMenu} >
                        My Orders
                      </NavLink>
                    </li>
                  </div>

                  <div className='h-[25%] w-[90%]'>
                    <li className='flex justify-center items-center h-[100%] w-[100%]'>
                      <NavLink
                        to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={context.toggleUserMenu} >
                        My Account
                      </NavLink>
                    </li>
                  </div>

                  <div className='flex justify-center items-center h-[25%] w-[90%]'>
                    <li>
                      <NavLink
                        to='/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => handleSignOut()}>
                        Sign out
                      </NavLink>
                    </li>
                  </div>
                </div>
              </div>
            </UserMenu>
          <ShoppingCart />
        </>
      )
    }
  }

  return (
<nav className='flex fixed justify-center items-center z-10 top-0  w-[100%] h-[80px] py-5 px-8 text-sm font-light bg-[rgb(18,18,18)] rounded-b-[30px]'>
      
      <ul className='lg:flex hidden items-center gap-10 ml-10 text-[rgb(123,123,123)]'>
        <li className='font-semibold text-lg'>
          <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
            Shopi
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/'
            onClick={() => {
              context.setSearchByCategory(''),
              context.closeAll()
            }}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>

        <li>
          <NavLink
                to='/clothes'
                onClick={() => { 
                  context.setSearchByCategory('Clothes'),
                  context.toggleMenu() 
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Clothes
          </NavLink>
        </li>

        <li>
          <NavLink
                to='/electronics'
                onClick={() => { 
                  context.setSearchByCategory('Electronics'),
                  context.toggleMenu()
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Electronics
            </NavLink>
        </li>
        <li>
          <NavLink
            to='/Furnitures'
            onClick={() => {
              context.setSearchByCategory('furniture'),
              context.closeAll
            }}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Shoes'
            onClick={() => {
              context.setSearchByCategory('shoes'),
              context.closeAll()
            }}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Others'
            onClick={() => {
              context.setSearchByCategory('others'),
              context.closeAll
            }}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      
      {/* Mobile Menu */}
      <HiBars2 
          color='#fff'
          size={24}
          onClick={() => {
            context.toggleMenu(),
            context.closeUserMenu(),
            context.closeCheckoutSideMenu(),
            context.closeProductDetail()
          }
          }
          className='lg:hidden absolute left-[10%]' />
      
      <div className={`${context.isMenuOpen ? "" : "hidden"} lg:hidden w-screen h-[calc(60vh-81px)] top-[81px] absolute flex flex-col items-center justify-evenly bg-[rgb(18,18,18)] rounded-[30px] text-[rgb(128,128,128)]`}>
        
          <p className='font-semibold text-lg mt-5'>
            <NavLink to={`${isUserSignOut ? '/sign-in' : '/Products'}`}>
              Shopi
            </NavLink>
          </p>
        
        <ul className='flex flex-col justify-evenly items-center w-[90%] md:w-[95%] h-full m-5 bg-[rgb(40,40,40)] rounded-lg'>
        
          <div className='h-[20%] w-[97%] mt-2'>
            <li className='h-[100%] flex justify-center items-center w-[100%]'>
              <NavLink
                to='/'
                onClick={() => {
                  context.setSearchByCategory(''), context.toggleMenu()
                  }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                All
              </NavLink>
            </li>
          </div>

          <div className='h-[20%] w-[97%]'>
            <li className='h-[100%] flex justify-center items-center w-[100%]'>
              <NavLink
                to='/clothes'
                onClick={() => { 
                  context.setSearchByCategory('Clothes'),
                  context.toggleMenu() 
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Clothes
              </NavLink>
            </li>
          </div>
          
          <div className='h-[20%] w-[97%]'>
            <li className='h-[100%] flex justify-center items-center w-[100%]'>
              <NavLink
                to='/electronics'
                onClick={() => { 
                  context.setSearchByCategory('Electronics'),
                  context.toggleMenu()
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Electronics
              </NavLink>
            </li>
          </div>
          
          <div className='h-[20%] w-[97%]'>
            <li className='h-[100%] flex justify-center items-center w-[100%]'>
              <NavLink
                to='/furnitures'
                onClick={() => {
                  context.setSearchByCategory('Furniture'),
                  context.toggleMenu()
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Furniture
              </NavLink>
            </li>
          </div>
          
          <div className='h-[20%] w-[97%]'>
            <li className='h-[100%] flex justify-center items-center w-[100%]'>
              <NavLink
                to='/shoes'
                onClick={() => {
                  context.setSearchByCategory('Shoes'),
                  context.toggleMenu()
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Shoes
              </NavLink>
            </li>
          </div>
          
          <div className='h-[20%] w-[97%] mb-2'>
            <li className='h-[100%] flex justify-center items-center w-[100%]'>
              <NavLink
                to='/others'
                onClick={() => {
                  context.setSearchByCategory('others'),
                  context.toggleMenu()
                }}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Others
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
      
      {/* end Mobile Menu */}

      
      <ul className='flex items-center absolute end-0 right-0 gap-3 mr-10 md:mr-20'>
        {renderView()}
      </ul>
      
      </nav>
     )
  
}

export default Navbar