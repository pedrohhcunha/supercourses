import Footer from "../components/Footer/component"
import Newsletter from "../components/Newsletter/component"
import Stats from "../components/Stats/component"
import Initial from "../components/Initial/component"
import Header from "../components/Header/component"
import LearnMore from "../components/LearnMore/component"
import Plans from "../components/Plans/component"
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Super Courses - for everything you need</title>
      </Head>
      <Header />
      <Initial />
      <LearnMore />
      <Stats />
      <Plans />
      <Newsletter />
      <Footer />
    </main>
  )
}
