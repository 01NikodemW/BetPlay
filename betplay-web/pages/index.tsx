import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>
        <div>
          <p>
            Get started by editing&nbsp;
            <code>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              By{" "}
              <Image
                priority
                alt="Vercel Logo"
                height={24}
                src="/vercel.svg"
                width={100}
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
