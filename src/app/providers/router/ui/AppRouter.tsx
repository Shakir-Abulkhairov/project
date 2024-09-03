import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routersConfig} from "shared/config/routeConfig/routeConfig";
import {LoaderPage} from "widgets/LoaderPage";

export const AppRouter = () =>{
    return<Routes>
            {routersConfig.map(({path,element}) =>  <Route key={path} {...{path}} element={
                <Suspense fallback={<LoaderPage/>}>
                    <div className={'page-wrapper'}>
                        {element}
                    </div>
                </Suspense>
            }/>)}
        </Routes>
}


