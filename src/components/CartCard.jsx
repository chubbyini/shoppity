import { useCart } from "../Context/CartContext";
export const CartCard = ({ product }) => {
  const { RemoveFromCart } = useCart();
  const { name, price, image } = product;


  return (
    <div className="flex justify-between items-center shadow-md rounded-md my-7 mx-2.5 p-2.5">
      {/* Hide image on small screens */}
      <img
        src={image}
        alt={name}
        className="w-[150px] h-[100px] mr-2.5 hidden sm:block"
      />
      <p className="w-[350px] mr-2.5">{name}</p>
      <p className="w-[100px] mr-2.5">{price}</p>
      <button onClick={()=>RemoveFromCart(product) } className="bg-[#ac0d14] text-white rounded px-2.5 py-1 cursor-pointer hover:bg-[#8e090f]">
        Remove product
      </button>
    </div>
  );
};
