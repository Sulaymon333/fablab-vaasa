import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';

const Checkout = ({ basketItems }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    return (
        <div className="absolute right-0 z-50 p-4 px-5 pl-3 rounded-lg shadow-lg bg-gray-50 top-[4rem]">
            <div className="flex flex-col">
                <ul className="flex-col space-y-4">
                    {basketItems.map((item) => {
                        const removeItemFromBasket = () => {
                            dispatch(removeFromBasket({ id: item.id }));
                        };
                        return (
                            <li key={item.id} className="relative flex items-center">
                                <Image width={50} height={50} objectFit="contain" src={item.img} alt={item.name} />

                                <p className="pl-2 pr-16 capitalize">
                                    {item.name.length > 11 ? `${item.name.slice(0, 11)}...` : item.name}
                                </p>
                                <button
                                    className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 font-bold text-yellow-400 bg-white rounded-full shadow-md cursor-pointer"
                                    onClick={() => removeItemFromBasket()}
                                >
                                    x
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {basketItems.length > 0 && (
                    <button
                        className="self-center mx-auto mt-6 text-center btn"
                        onClick={() => router.push('/en/reserve-machine')}
                    >
                        Select time
                    </button>
                )}
            </div>
            {basketItems.length === 0 && <p>Please select machine(s) to book</p>}
        </div>
    );
};

export default Checkout;
