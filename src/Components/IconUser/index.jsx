import { useContext } from 'react'
import { UserIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'

const IconUser = () => {
  const context = useContext(ShoppingCartContext)

  const toggleUserMenu = () => {
    context.setIsUserMenuOpen(!context.isUserMenuOpen);
    context.closeProductDetail();
    context.closeCheckoutSideMenu();
    context.closeMenu()
  }

  return (
    <div
        className='relative flex gap-0.5 items-center' 
        onClick={() => 
          toggleUserMenu()
        }

    >

    <UserIcon 
        className='w-6 h-6 fill-none stroke-white cursor-pointer'
    />

    </div>
  )
}

export default IconUser