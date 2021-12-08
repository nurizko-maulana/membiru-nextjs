import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export default function CoolImage() {
    return (<>
    <Head>
        <title>
            Image
        </title>
    </Head>
        <Image width={200} height={200} src="/images/gif.gif" alt="Cool Image" />
        <Link href="/posts/first-post"><a>Go Back</a></Link>
    </>)
}
