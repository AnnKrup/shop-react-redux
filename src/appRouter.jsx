import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privetRoutes} from "./router/routes";

const AppRouter = () => {

    return (
                <Routes>
                    {privetRoutes.map( (route, index) =>
                        <Route key={index}
                               path={route.path}
                               element={route.component}
                               exact={route.exact}>
                        </Route>
                    )}
                </Routes>
    );
};

export default AppRouter;