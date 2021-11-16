import { useSelector } from 'react-redux';
import { selectItems, updateBasket, resetBasket } from '../slices/basketSlice';
import { useState } from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
    const router = useRouter();
    const [booked, setBooked] = useState([]);
    const basketItems = useSelector(selectItems);
    const [startDate, setStartDate] = useState(new Date());
    const [dateFormatted, setDateFormatted] = useState(format(new Date(), 'dd MMM, yyyy'));
    const [formData, setFormData] = useState({ firstName_LastName: '', email: '', phone: '' });

    const dispatch = useDispatch();

    const handleClick = (itemId, itemName, itemImg, itemType, timeslotInfo) => {
        const basketItemsCopy = [...basketItems];
        const timeslotUpdated = basketItemsCopy
            .filter((item) => item.id === itemId)[0]
            .timeSlots.map((item) => {
                if (item.time === timeslotInfo.time) {
                    if (timeslotInfo.available) {
                        return { time: timeslotInfo.time, available: false };
                    } else {
                        return { time: timeslotInfo.time, available: true };
                    }
                }
                return item;
            });
        const updatedBasketItem = {
            id: itemId,
            name: itemName,
            img: itemImg,
            type: itemType,
            timeSlots: timeslotUpdated,
        };
        dispatch(updateBasket(updatedBasketItem));

        const data = { id: itemId + timeslotInfo.time, name: itemName, date: dateFormatted, timeSlotsSelected: [] };
        const indexF = booked.findIndex((item) => item.id === itemId + timeslotInfo.time);
        if (indexF >= 0) {
            return;
        } else {
            data.timeSlotsSelected.push(timeslotInfo.time);
        }
        setBooked([...booked, data]);
    };

    const handleDateChange = (date) => {
        setStartDate(date);
        setDateFormatted(format(new Date(date), 'dd MMM, yyyy'));
    };

    const handleFormChange = (e) => {
        const inputValue = e.target.value;
        setFormData({ ...formData, [e.target.name]: inputValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetBasket());
        router.push('/');
        console.log(formData);
    };

    return (
        <div className="px-3 py-10 mx-auto">
            <h1 className="inline-block p-2 px-3 text-lg font-medium text-white uppercase bg-gray-600 rounded-lg">
                Your bookings
            </h1>
            <hr className="my-3" />
            <section className="flex flex-wrap gap-1 mt-6 space-y-6 md:space-y-0">
                <article>
                    <h2 className="uppercase font-md">1. select date</h2>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => handleDateChange(date)}
                        dateFormat="dd MMM, yyyy"
                        filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                        minDate={new Date()}
                        isClearable={true}
                        className="p-2 my-2 bg-gray-100 rounded-md"
                    />

                    <h3 className="font-bold text-gray-600">Booking info</h3>
                    <ul className="ml-4 list-disc">
                        <li>
                            3D printers
                            <br />
                            <span className="text-sm">3 reservations/week</span>
                        </li>
                    </ul>
                </article>
                <article className="flex flex-col flex-1 px-0 md:px-3">
                    <h2 className="mb-3 uppercase font-md">2. Machine available times</h2>
                    <div className="flex max-w-md space-x-3 overflow-scroll sm:max-w-full scrollbar-hide">
                        {basketItems.map((item) => {
                            return (
                                <div key={item.id}>
                                    <h3 className="mb-3 font-bold text-gray-600 uppercase">
                                        {item.name.length > 11 ? `${item.name.slice(0, 8)}...` : item.name}
                                    </h3>
                                    <ul className="flex flex-col items-start space-y-2">
                                        {item.timeSlots.map((timeslot, index) => {
                                            let selectedIndex = item.id;
                                            return (
                                                <li
                                                    key={item.id + '-' + Math.random()}
                                                    onClick={() =>
                                                        handleClick(item.id, item.name, item.img, item.type, timeslot)
                                                    }
                                                    className={`inline-block px-6 py-1 rounded-lg hover:bg-yellow-100 hover:border-white cursor-pointer ${
                                                        timeslot.available
                                                            ? 'border border-gray-200'
                                                            : 'bg-yellow-300 hover:bg-yellow-300'
                                                    }`}
                                                >
                                                    {timeslot.time}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                        {basketItems.length === 0 && (
                            <p className="p-4 bg-yellow-100 rounded-lg">Please select machines from homepage</p>
                        )}
                    </div>
                </article>
                <article>
                    <h2 className="uppercase font-md">3. Booking details</h2>
                    <div className="my-3 space-y-2">
                        {basketItems.map((item1) =>
                            item1.timeSlots.map((item) => {
                                if (item.available === false) {
                                    return (
                                        <div
                                            key={item1.id + item.time}
                                            className="relative p-2 text-white bg-gray-600 rounded-2xl"
                                        >
                                            <p>{item1.name}</p>
                                            <p className="font-bold">
                                                {dateFormatted} {item.time}
                                            </p>
                                            <span
                                                className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 font-bold text-yellow-400 bg-white rounded-full cursor-pointer"
                                                n
                                                onClick={() =>
                                                    handleClick(item1.id, item1.name, item1.img, item1.type, item)
                                                }
                                            >
                                                x
                                            </span>
                                        </div>
                                    );
                                } else {
                                    return;
                                }
                            })
                        )}
                    </div>
                    <h3 className="mb-3 font-bold text-gray-600">Your Info:</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName_LastName" className="text-sm">
                                Firstname Lastname<sup>*</sup>
                            </label>
                            <br />
                            <input
                                type="text"
                                name="firstName_LastName"
                                id="firstName_LastName"
                                value={formData.firstName_LastName}
                                placeholder="John Doe"
                                className="w-full p-2 my-2 bg-gray-100 rounded-md"
                                onChange={handleFormChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm">
                                Email<sup>*</sup>
                            </label>
                            <br />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                placeholder="johdoe@email.com"
                                className="w-full p-2 my-2 bg-gray-100 rounded-md"
                                onChange={handleFormChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="text-sm">
                                Phone<sup>*</sup>
                            </label>
                            <br />
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                placeholder="0557678654"
                                className="w-full p-2 my-2 bg-gray-100 rounded-md"
                                pattern="[0-9]{10}"
                                onChange={handleFormChange}
                            />
                        </div>

                        <button className="mt-4 btn" type="submit">
                            confirm reservation
                        </button>
                    </form>
                </article>
            </section>
        </div>
    );
};

export default Booking;
