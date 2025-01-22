import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go(-1)
            router.push('/');
        }, 3000)
    }, [])

    return (
        <>
            <Head>
                <title>Ninja List | 404</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div className="not-found">
                <h1>Ooooopsss....</h1>
                <h2>That page cannot found.</h2>
                <p>Go back to the <Link href="/">Homepage</Link></p>
            </div>
        </>
    );
}
 
export default NotFound;