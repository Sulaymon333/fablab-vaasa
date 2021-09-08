import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroText from '../components/HeroText';
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
                <HeroText />
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
