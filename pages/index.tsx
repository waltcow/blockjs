import Link from 'next/link'
import Head from 'next/head'

const IndexPage = () => (
    <div>
        <Head>
            <title>Home</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <h1>Hello Next.js 👋</h1>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </div>
)

export default IndexPage