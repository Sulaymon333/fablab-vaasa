import Image from 'next/image';

const Checkout = ({ basketItems, removeItemFromBasket }) => {
    console.log(basketItems);
    return (
        <div className="absolute right-8 z-50 p-4 px-5 pl-3 rounded-lg shadow-lg bg-gray-50 top-[5.5rem]">
            <ul className="flex-col space-y-5 ">
                {basketItems.map((item) => (
                    <li key={item.id} className="relative flex items-center">
                        <Image width={50} height={50} objectFit="contain" src={item.img} alt={item.name} />

                        <p className="pl-2 pr-16 capitalize">
                            {item.name.length > 11 ? `${item.name.slice(0, 11)}...` : item.name}
                        </p>
                        <button
                            className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 ml-10 font-bold text-yellow-400 bg-white rounded-full cursor-pointer"
                            onClick={() => removeItemFromBasket(item.id)}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Checkout;
