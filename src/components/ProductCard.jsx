export const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="w-[350px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-[5px] m-[10px] p-[10px]  flex flex-col justify-between">
      <img src={image} alt={name} className="max-w-full h-[250px] my-[10px]" />
      
      <p className="my-[10px] text-[18px] font-medium">{name}</p>
      
      <div className="flex flex-col gap-[10px]">
        <p className="text-[18px] font-medium">${price}</p>
        
        <button className="border-0 rounded-[5px] text-[16px] text-[#FFFFFF] bg-[#1C59AE] py-[7px] px-[10px] cursor-pointer max-w-[150px] hover:bg-[#103f80]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
