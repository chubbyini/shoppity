import { useTitle } from "../Hooks/useTitle"
import { CartCard } from "../components/CartCard"

export const Card = () => {
  useTitle("Card")
const products = [
  {
    id: 1,
    name: "Stylish Jacket",
    price: 100,
    image: "src/assets/react.svg"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 200,
    image:"src/assets/react.svg"
  }]


  return (
    <main>
      <section>
        <h1>Cart items:{products.length}</h1>
        {products.map((product)=>(
          <CartCard key={product.id} product={product} />
        ))}
        
      </section>
    </main>
  )
}
