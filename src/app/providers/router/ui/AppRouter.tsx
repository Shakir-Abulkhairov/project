import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routersConfig} from "shared/config/routeConfig/routeConfig";

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


