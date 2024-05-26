import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";
export const App = () =>{
    const {theme,toggleTheme } = useTheme()

  return <div className={classNames('app',{},[theme])}>
      <Link to={'/'}>
          main
      </Link>
      <Link to={'/about'}>
         about
      </Link>
      <button onClick={toggleTheme}>
          toggle
      </button>
      <Suspense fallback={'...loading'}>
          <Routes>
              <Route path={'/'} element={<MainPageAsync/>}/>
              <Route path={'/about'} element={<AboutPageAsync />}/>
          </Routes>
      </Suspense>
  </div>
}