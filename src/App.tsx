import { Container, Flex, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { Outlet } from 'react-router-dom'
import NavBar from './component/NavBar'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState(1);
  return (
    <>
      <Theme appearance={theme ? "dark" : "light"}>
        <NavBar theme={theme} setTheme={setTheme} />
        <Outlet />
      </Theme>
    </>
  )
}

export default App
