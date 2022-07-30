import './App.css'
import 'aos/dist/aos.css'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { dark, light } from './styles/themes'

import AboutComponent from './components/About'
import Aos from 'aos'
import Banner from './components/Banner'
import Contact2 from './components/contact/index2'
import Footer from './components/footer'
import Header from './components/Header'
import { KEY_THEME } from './const'
import PortfolioComponent from './components/portfolio'
import SkillComponent from './components/Skill'
import { useState } from 'react'
import Loading from './components/Loading'

const GlobalStyle = createGlobalStyle`
  body{
    background: ${(props) => props.theme.clrWhite};
    color: ${(props) => props.theme.clrGrey1};;
    line-height: 1.5;
    font-size: 0.875rem;
  }
`

function App() {
  const [theme, setTheme] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useState(() => {
    const themeLocal = localStorage.getItem(KEY_THEME)
    setTheme(themeLocal)
    Aos.init({ duration: 2000 })

    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [theme])

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <ThemeProvider theme={theme === 'dark' ? dark : light}>
          <GlobalStyle />
          <Header theme={theme} setTheme={setTheme}></Header>
          <Banner></Banner>
          <AboutComponent></AboutComponent>
          <SkillComponent />
          <PortfolioComponent />
          <Contact2 />
          <Footer />
        </ThemeProvider>
      )}
    </div>
  )
}

export default App
