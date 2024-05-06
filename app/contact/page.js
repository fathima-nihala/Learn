import Contact from '@/components/contact'
import Head from 'next/head'

export const metadata = {
    title:"ContactUs Page",
    description:"LearnCode contact form"
}


const page = () => {
    return (
    <>
    <Head>
        <title>NIHJA</title>
        <meta name='keywords' content='about'/>

    </Head>
    <div>
    <Contact/>
    </div>

    </>
    )
}

export default page;    