import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const MachineItem = ({ id, name, img, type, timeSlots }) => {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const machine = { id, name, type, img, timeSlots };
        dispatch(addToBasket(machine));
    };

    return (
        <article className="relative px-4 text-gray-800 rounded-md cursor-pointer">
            <Image width={200} height={200} objectFit="contain" src={img} alt={name} />
            <h3 className="my-4 font-bold capitalize">{name}</h3>
            <div className="flex items-center justify-between">
                <p>Tech.: {type.toUpperCase()}</p>
                <Link href="/en/reserve-machine">
                    <p onClick={addItemToBasket} className="btn">
                        Book
                    </p>
                </Link>
            </div>
            <button
                onClick={addItemToBasket}
                className="absolute h-10 w-10 text-2xl font-bold text-center text-white bg-yellow-300 rounded-full top-[30%] right-5"
            >
                +
            </button>
        </article>
    );
};

export default MachineItem;
