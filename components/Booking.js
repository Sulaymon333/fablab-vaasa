import { useSelector } from 'react-redux';
import { selectItems, updateBasket } from '../slices/basketSlice';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';

const Booking = () => {
    const [booked, setBooked] = useState([]);
    const basketItems = useSelector(selectItems);
    const [date, setDate] = useState(new Date());
    const [dateFormatted, setDateFormatted] = useState(format(new Date(), 'dd MMM, yyyy'));
    const inputRef = useRef(null);

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

    const handleDateChange = (e) => {
        setDate(e.target.value);
        setDateFormatted(format(new Date(e.target.value), 'dd MMM, yyyy'));
    };

    const handleDateFocus = (e) => {
        e.target.type = 'date';
    };

    const handleDateBlur = (e) => {
        e.target.type = 'text';
    };

    const removeBooking = (id) => {
        const newBooked = booked.filter((item) => item.id !== id);
        setBooked(newBooked);
    };

    const info = [...basketItems].map((item) => {
        if (item.timeSlots.some((item) => item.available === false)) {
            return { ...item, timeSlots: item.timeSlots.filter((slot) => slot.available === false) };
        } else {
            return item;
        }
    });

    return (
        <div className="px-3 py-10 mx-auto">
            <h1 className="inline-block p-2 px-3 text-lg font-medium text-white uppercase bg-gray-600 rounded-lg">
                Your bookings
            </h1>
            <hr className="my-3" />
            <section className="flex flex-wrap gap-1 mt-6 space-y-6 md:space-y-0">
                <article>
                    <h2 className="uppercase font-md">1. select date</h2>
                    <input
                        type="text"
                        className="p-2 my-2 bg-gray-100 rounded-md"
                        value={dateFormatted}
                        onChange={(e) => handleDateChange(e)}
                        onFocus={handleDateFocus}
                        onBlur={handleDateBlur}
                        ref={inputRef}
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
                <form>
                    <h2 className="uppercase font-md">3. Booking details</h2>
                    <div className="my-3 space-y-2">
                        {/* {booked.map((item) => (
                            <div
                                key={item.name + item.timeSlotsSelected}
                                className="relative p-2 text-white bg-gray-600 rounded-2xl"
                            >
                                <p>{item.name}</p>
                                <p className="font-bold">
                                    {item.date} {item.timeSlotsSelected}
                                </p>
                                <span
                                    className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 font-bold text-yellow-400 bg-white rounded-full cursor-pointer"
                                    n
                                    onClick={() => removeBooking(item.id)}
                                >
                                    x
                                </span>
                            </div>
                        ))} */}

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
                                                {'jdjdj'} {item.time}
                                            </p>
                                            <span
                                                className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 font-bold text-yellow-400 bg-white rounded-full cursor-pointer"
                                                n
                                                onClick={() => removeBooking(item.id)}
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
                    <div>
                        <div>
                            <label htmlFor="">
                                Firstname Lastname<sup>*</sup>
                            </label>
                            <br />
                            <input type="text" name="" id="" className="w-full p-2 my-2 bg-gray-100 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="">
                                Email<sup>*</sup>
                            </label>
                            <br />
                            <input type="email" name="" id="" className="w-full p-2 my-2 bg-gray-100 rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="">
                                Phone<sup>*</sup>
                            </label>
                            <br />
                            <input
                                type="tel"
                                name=""
                                id=""
                                className="w-full p-2 my-2 bg-gray-100 rounded-md"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            />
                        </div>

                        <button className="mt-4 btn">confirm reservation</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Booking;
