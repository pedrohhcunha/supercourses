import Footer from "../components/Footer/component"
import Newsletter from "../components/Newsletter/component"
import Stats from "../components/Stats/component"
import Initial from "../components/Initial/component"
import Header from "../components/Header/component"
import LearnMore from "../components/LearnMore/component"

export default function Home() {
  return (
    <main>
      <Header />
      <Initial />
      <LearnMore />
      <Stats />
      <Newsletter />
      <Footer />
    </main>
  )
}
