import { XMarkIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types';

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props
  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} 
    className='h-6 w-6 text-white cursor-pointer'></XMarkIcon>
  }

  return (
    <div className="flex justify-between w-auto items-center text-white rounded-lg mb-3 hover:bg-[rgb(28,28,28)] bg-[rgb(40,40,40)]">
      <div className='flex items-center gap-3 md:gap-5'>
        <figure className='w-20 h-20'>
          <img className='min-w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-end gap-2 p-1'>
        <p className='text-lg font-medium'>${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

OrderCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  handleDelete: PropTypes.func,
};

export default OrderCard