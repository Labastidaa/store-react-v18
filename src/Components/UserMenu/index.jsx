import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'



const UserMenu = ({children}) => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isUserMenuOpen ? 'flex' : 'hidden'} w-screen md:w-[200px] h-[300px] top-[85px] items-center justify-center
      right-0 md:right-4 flex-col fixed drop-shadow-md rounded-lg bg-[rgb(18,18,18)]`}
      >
        {children}
    </aside>
  )
}



export default UserMenu