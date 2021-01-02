import Head from "next/head"
import Hero from "../components/Hero"

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <main>
        <h1>Hello World</h1>
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

export default Home
