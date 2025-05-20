import { ProductCard } from "../components"
import { useTitle } from "../Hooks/useTitle";
export const Home = () => {
  useTitle("Home")

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
  },
  {
    id: 3,
    name: "Smartphone",
    price: 300,
    image: "src/assets/react.svg"
  },
  {
    id: 4,
    name: "Luxury Watch",
    price: 500,
    image: "src/assets/react.svg"
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 80,
    image: "src/assets/react.svg"
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 120,
    image: "src/assets/react.svg"  },
  {
    id: 7,
    name: "Laptop Bag",
    price: 60,
    image: "src/assets/react.svg", 
   },
    {
    id: 8,
    name: "Bluetooth Speaker",
    price: 90,
    image: "src/assets/react.svg"
  },
];



  return (

    <main>
        <section className="flex flex-wrap justify-center items-center max-w-[1200px] mx-auto">
        {products.map((product)=>(
            <ProductCard key={product.id} product={product} />
        )) }
        </section>
    </main>
  )
}
