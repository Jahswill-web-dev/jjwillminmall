import Head from "next/head";
import Nav from "../components/Nav"
function Blog() {
    return (<>
        <Head>
            <title>J.J.WILLMIN SHOPPING MALL Blog</title>
            <meta name="description" content="Lucratve Real Estate Investment, own a space in the J.J.WILLMIN SHOPPING MALL complex and make profits" />
            <link rel="icon" href="/logo.png" />
        </Head>
        <div>
            <Nav/>
            <div className="flex h-screen items-center justify-center">
                <h1 className="text-secondary text-5xl text-center">
                    Coming soon....
                </h1>
            </div>
        </div>

    </>);
}

export default Blog;