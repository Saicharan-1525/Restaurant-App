import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)
  console.log(cartItems)

  const renderCartTcon = () => (
    <div className="cart-icon-link">
    <button type="button" className="cart-icon-button" data-testid="cart">
          <AiOutlineShoppingCart className="cart-icon" />
        </button>
      <div className="cart-count-badge d-flex justify-content-center align-items-center">
        <p className="m-0 cart-count">{getCartItemsCount()}</p>
      </div>
    </div>
  )

  return (
    <header className="p-4 d-flex flex-row align-item-center nav-header ">
      <h1 className="m-0 logo-heading">UNI Resto Cafe</h1>
      <div className="d-flex flex-row align-items-center ms-auto">
        <p className="mt-0 mb-0 me-2 d-none d-sm-block my-orders-text">
          My orders
        </p>
        {renderCartTcon()}
      </div>
    </header>
  )
}

export default Header
