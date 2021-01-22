import Head from "next/head"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Map from "../components/Map"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Audio Video Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Stats />
      <Map />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
