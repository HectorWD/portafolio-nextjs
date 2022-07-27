import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact/Contact'
import Main from '../components/Main/Main'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hector Wong - Portfolio</title>
        <meta name="Hector Wong Portfolio" content="about HectorWong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
