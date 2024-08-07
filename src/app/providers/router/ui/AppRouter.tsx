import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {routersConfig} from "shared/config/routeConfig/routeConfig";
import {classNames} from "shared/lib/classNames";

export const AppRouter = () =>{
    return   <Suspense fallback={'...loading'}>
        <Routes>
            {routersConfig.map(({path,element}) =>  <Route key={path} {...{path}} element={
                <div className={'page-wrapper'}>
                    {element}
                </div>
            }/>)}
        </Routes>
    </Suspense>
}


