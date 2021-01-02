import Head from "next/head"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Stats />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
