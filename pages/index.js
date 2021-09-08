import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Machines from '../components/Machines';

export default function Home({ machines }) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="py-10 mx-auto max-w-screen-2xl">
                <h2 className="text-2xl font-medium">Reserve a 3D Printer</h2>
                <h3 className="py-4 text-lg font-light">
                    As an student or even a hobbysit, you can reserve time for using any of the 3D printer at
                    Technobothnia laboratory easily online.
                </h3>
                <ol className="mt-3 ml-4 list-decimal">
                    <li>Choose the machine you would like to use</li>
                    <li>Select the time and reservation item</li>
                    <li>
                        Enter your booking details and send your reservation. You will receive an email with a link to
                        your booking information, which you can use to cancel your reservation if necessary.
                    </li>
                </ol>
                <Machines machines={machines.data} />
            </main>
            <Footer />
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://raw.githubusercontent.com/Sulaymon333/machine-data/main/machineData.json');
    const machines = await res.json();
    return {
        props: {
            machines,
        },
    };
}
