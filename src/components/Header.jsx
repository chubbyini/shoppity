import { useCart } from '../Context/CartContext'
import logo from '/vite.svg'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  const {cartList} = useCart()
  return (
    <header className="flex justify-between items-center h-[70px] max-w-[1200px] mx-auto border-b border-[#EEEEEE] text-[18px] px-[10px]">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="shoppity" className="max-w-[40px] mr-[5px]" />
        <span>Shoppity</span>
      </Link>

      {/* Navigation Menu (hidden on small screens) */}
      <nav className="flex gap-2 max-[680px]:hidden">
        <NavLink to="/" className={({ isActive }) =>
            `p-[10px] rounded-[5px] min-w-[70px] font-medium ${
              isActive ? 'bg-[#EEEEEE]' : ''
            }`}  end>Home</NavLink>
            <NavLink to="/cart" className={({ isActive }) =>
            `p-[10px] rounded-[5px] min-w-[70px] font-medium ${
              isActive ? 'bg-[#EEEEEE]' : ''
            }`
          }
        >
          Cart
        </NavLink>
      </nav>

      <Link to="/cart" className="font-medium">
        <span>cart: {cartList.length}</span>
      </Link>
    </header>
  )
}
