function HeroText() {
    return (
        <div className="px-6 xlg:px-0">
            <h2 className="text-2xl font-medium">Reserve a 3D Printer</h2>
            <h3 className="py-4 text-lg font-light">
                As an student or even a hobbysit, you can reserve time for using any of the 3D printer at Technobothnia
                laboratory easily online.
            </h3>
            <ol className="mt-3 ml-4 list-decimal">
                <li>Choose the machine you would like to use</li>
                <li>Select the time and reservation item</li>
                <li>
                    Enter your booking details and send your reservation. You will receive an email with a link to your
                    booking information, which you can use to cancel your reservation if necessary.
                </li>
            </ol>
        </div>
    );
}

export default HeroText;
