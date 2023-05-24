import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div className='absolute right-[calc(100vw-50%)] flex justify-center items-center text-white bg-white'>
          <p className='w-[800px]'>We don't have anything </p>  
        </div>
      )
    }
  }

  return (
    <Layout>
    
    {/* TITLE */}

      <div className='flex items-center justify-center relative w-80 m-5'>
        <h1 className='font-medium text-xl text-white'>Store Products</h1>
      </div>

    {/* SEARCH BAR */}
    <div className='rounded-lg w-2/3 sm:w-3/4 md:w-2/3 lg:3/4 p-2 mb-10 bg-[rgb(18,18,18)]'>
      <input
          type="text"
          placeholder='Search a product'
          className='rounded-lg border-black bg-[rgb(28,28,28)] w-full p-4 focus:outline-blue-600'
          onChange={(event) => context.setSearchByTitle(event.target.value)} />
    </div>

    {/* PRODUCTS CONTAINER */}
    <div className='bg-[rgb(18,18,18)] pt-[5px] md:pt-[10px] rounded-lg flex justify-center items-center w-[90%]'>
        <div className='grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-[4px] w-[98%]'>
          {renderView()}
        </div>
    </div>

      <ProductDetail />
    </Layout>
  )
}

export default Home