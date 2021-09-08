const Booking = () => {
    return (
        <div className="px-3 py-10 mx-auto">
            <h1 className="inline-block p-2 px-3 text-lg font-medium text-white uppercase bg-gray-600 rounded-lg">
                Your bookings
            </h1>
            <hr className="my-3" />
            <section className="flex flex-wrap gap-1 mt-6 space-y-6 md:space-y-0">
                <article>
                    <h2 className="uppercase font-md">1. select date</h2>
                    <input type="date" name="" id="" className="p-2 my-2 bg-gray-100 rounded-md" />
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
                        <div>
                            <h3 className="mb-3 font-bold text-gray-600 uppercase">Prusa i3</h3>
                            <ul className="flex flex-col items-start space-y-2">
                                <li className="inline-block px-6 py-1 border border-gray-200 rounded-lg justify-self-start">
                                    10:00-11:00
                                </li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">11:00-12:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">12:00-13:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">13:00-14:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">14:00-15:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">15:00-16:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">16:00-17:00</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold text-gray-600 uppercase">Markforged</h3>
                            <ul className="flex flex-col items-start space-y-2">
                                <li className="inline-block px-6 py-1 border border-gray-200 rounded-lg justify-self-start">
                                    10:00-11:00
                                </li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">11:00-12:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">12:00-13:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">13:00-14:00</li>
                                <li className="inline-block px-6 py-1 border border-gray-200 rounded-lg">
                                    14:00-15:00
                                </li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">15:00-16:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">16:00-17:00</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold text-gray-600 uppercase">Markforged</h3>
                            <ul className="flex flex-col items-start space-y-2">
                                <li className="inline-block px-6 py-1 border border-gray-200 rounded-lg justify-self-start">
                                    10:00-11:00
                                </li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">11:00-12:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">12:00-13:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">13:00-14:00</li>
                                <li className="inline-block px-6 py-1 border border-gray-200 rounded-lg">
                                    14:00-15:00
                                </li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">15:00-16:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">16:00-17:00</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold text-gray-600 uppercase">Markforged</h3>
                            <ul className="flex flex-col items-start space-y-2">
                                <li className="inline-block px-6 py-1 border border-gray-200 rounded-lg justify-self-start">
                                    10:00-11:00
                                </li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">11:00-12:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">12:00-13:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">13:00-14:00</li>
                                <li className="inline-block px-6 py-1 border border-gray-200 rounded-lg">
                                    14:00-15:00
                                </li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">15:00-16:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">16:00-17:00</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold text-gray-600 uppercase">Markforged</h3>
                            <ul className="flex flex-col items-start space-y-2">
                                <li className="inline-block px-6 py-1 border border-gray-200 rounded-lg justify-self-start">
                                    10:00-11:00
                                </li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">11:00-12:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">12:00-13:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">13:00-14:00</li>
                                <li className="inline-block px-6 py-1 border border-gray-200 rounded-lg">
                                    14:00-15:00
                                </li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">15:00-16:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">16:00-17:00</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3 font-bold text-gray-600 uppercase">Markforged</h3>
                            <ul className="flex flex-col items-start space-y-2">
                                <li className="inline-block px-6 py-1 border border-gray-200 rounded-lg justify-self-start">
                                    10:00-11:00
                                </li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">11:00-12:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">12:00-13:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">13:00-14:00</li>
                                <li className="inline-block px-6 py-1 border border-gray-200 rounded-lg">
                                    14:00-15:00
                                </li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">15:00-16:00</li>
                                <li className="inline-block px-6 py-1 bg-yellow-300 rounded-lg">16:00-17:00</li>
                            </ul>
                        </div>
                    </div>
                </article>
                <form>
                    <h2 className="uppercase font-md">3. Booking details</h2>
                    <div className="my-3 space-y-2">
                        <div className="relative p-2 text-white bg-gray-600 rounded-2xl">
                            <p>Prusa i3</p>
                            <p className="font-bold">8 September, 2021 18:00-19:00</p>
                            <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 font-bold text-yellow-400 bg-white rounded-full cursor-pointer">
                                x
                            </span>
                        </div>
                        <div className="relative p-2 text-white bg-gray-600 rounded-2xl">
                            <p>Prusa i3</p>
                            <p className="font-bold">8 September, 2021 19:00-20:00</p>
                            <span className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 font-bold text-yellow-400 bg-white rounded-full cursor-pointer">
                                x
                            </span>
                        </div>
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
