import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import Head from 'next/head';

const Layout = ({ children, title }) => {

    const router = useRouter();
    useEffect(() => {

        const handleRouteChange = url => {
            console.log(url);
            NProgress.start();
        };

        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', ()=>{
            NProgress.done();
        })

        return () =>{
            router.events.off('routeChangeStart', handleRouteChange);
        }

    }, [])
    
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main className='container py-4'>
                {children}
            </main>
            <footer className='bg-dark text-light text-center'>
                <div className='container p-3'>
                    <h3>&copy; Sergio Cano Martínez</h3>
                    <p> Todos los derechos reservados. 2000 - {new Date().getFullYear()} </p>
                </div>
            </footer>
        </>
    )
}

export default Layout