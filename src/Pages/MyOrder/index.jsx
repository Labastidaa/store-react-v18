import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'


function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1


  const renderView = () => {
    if (!context.order?.length) {
      return (
      
        <p className='flex text-white'>EMPTY</p>
        
      ) }}

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-full  md:w-80 my-6 text-white '>
        <Link to='/my-orders' className='absolute left-[10%] md:left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-white cursor-pointer' />
        </Link> 
        <h1>My Order</h1>
        {renderView()}

      </div>
      <div className='flex flex-col w-[80%] md:w-[50%] bg-[rgb(18,18,18)] m-2 rounded-lg'>
        {
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }

      
      </div>
    </Layout>
  )
}

export default MyOrder