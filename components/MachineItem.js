import Image from 'next/image';
import Link from 'next/link';

const MachineItem = ({ name, img, type }) => {
    return (
        <article className="px-4 text-gray-800 rounded-md cursor-pointer ">
            <Image width={200} height={200} objectFit="contain" src={img} alt={name} />
            <h3 className="my-4 font-bold capitalize">{name}</h3>
            <div className="flex items-center justify-between">
                <p>Tech.: {type.toUpperCase()}</p>

                <Link href="/en/reserve-machine">
                    <p className="btn">Book</p>
                </Link>
            </div>
        </article>
    );
};

export default MachineItem;
