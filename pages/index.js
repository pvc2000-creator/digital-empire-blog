import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        {/* Google Analytics */}
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-ZDKCK2CT63'></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','G-ZDKCK2CT63');",
          }}
        />
      </Head>
      <main>
        <h1>Blog</h1>
        <p>A statically generated blog example using Next.js and Markdown.</p>
      </main>
    </>
  )
}
