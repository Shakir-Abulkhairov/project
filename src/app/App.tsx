import './styles/index.scss'
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames";
import {AppRouter} from "app/providers/router/ui/AppRouter";
import {NavBar} from "widgets/NavBar";

export const App = () =>{
    const {theme,toggleTheme } = useTheme()

  return <div className={classNames('app',{},[theme])}>
      <NavBar/>
      <button onClick={toggleTheme}>
          toggle
      </button>
    <AppRouter/>
  </div>
}