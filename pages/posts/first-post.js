import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>
        Wanna see cool image? checkout{" "}
        <Link href="/posts/image">
          <a>here</a>
        </Link>{" "}
      </h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
