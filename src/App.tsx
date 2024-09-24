import { useTheme } from "./components/context/ThemeContext";
import Header from "./components/header/Header";
import Main from "./pages/Main/Main";


function App() {
  const {isDark,toggleTheme} = useTheme();
  return (
<div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header  />
      <div className='container'>
      <Main />
      </div>
    </div>


  )
}

export default App
