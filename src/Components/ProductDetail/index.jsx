import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  
  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail w-[100vw] md:w-[400px] h-auto flex-col fixed right-0 top-[81px] rounded-lg bg-[rgb(18,18,18)] `}
      >
      <div className='flex flex-col m-5 bg-[rgb(40,40,40)] rounded-lg'>
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl text-white'>Product Details</h2>
          <div>
            <XMarkIcon
              className='h-6 w-6 text-white cursor-pointer'
              onClick={() => context.closeProductDetail()}></XMarkIcon>
          </div>
        </div>
        <figure className='px-6'>
          <img
            className='w-full h-full rounded-lg'
            src={context.productToShow.images}
            alt={context.productToShow.title} />
        </figure>
        <p className='flex flex-col p-6 text-white'>
          <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
          <span className='font-medium text-md mb-2'>{context.productToShow.title}</span>
          <span className='font-light text-sm'>${context.productToShow.description}</span>
        </p>
        </div>
    </aside>
  )
}

export default ProductDetail