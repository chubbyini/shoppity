import { ProductCard } from "../components"
import { useTitle } from "../Hooks/useTitle";

export const Home = () => {
  useTitle("Home");

  const products = [
    {
      id: 1,
      name: "Stylish Jacket",
      price: 100,
      image: "/vite.svg"
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 200,
      image: "/vite.svg"
    },
    {
      id: 3,
      name: "Smartphone",
      price: 300,
      image: "/vite.svg"
    },
    {
      id: 4,
      name: "Luxury Watch",
      price: 500,
      image: "/vite.svg"
    },
    {
      id: 5,
      name: "Sunglasses",
      price: 80,
      image: "/vite.svg"
    },
    {
      id: 6,
      name: "Running Shoes",
      price: 120,
      image: "/vite.svg"
    },
    {
      id: 7,
      name: "Laptop Bag",
      price: 60,
      image: "/vite.svg"
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      price: 90,
      image: "/vite.svg"
    },
  ];

  return (
    <main>
      <section className="flex flex-wrap justify-center items-center max-w-[1200px] mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
