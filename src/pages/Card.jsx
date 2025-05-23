import { useTitle } from "../Hooks/useTitle"
import { CartCard } from "../components/CartCard"
import { useCart } from "../Context/CartContext"

export const Card = () => {
  const {total,cartList}=useCart(); 
  useTitle("Card")

  return (
    <main>
      <section>
        <h1>Cart items:{cartList.length}/ ${total}</h1>
        {cartList.map((product)=>(
          <CartCard key={product.id} product={product} />
        ))}
        
      </section>
    </main>
  )
}
