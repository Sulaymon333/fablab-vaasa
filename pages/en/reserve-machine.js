import Head from 'next/head';
import Booking from '../../components/Booking';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeroText from '../../components/HeroText';

function reserveMachine() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="py-10 mx-auto max-w-screen-2xl">
                <HeroText />
                <Booking />
            </main>
            <Footer />
        </div>
    );
}

export default reserveMachine;
