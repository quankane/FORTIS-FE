import Aos from "aos";
import React, { lazy, Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));

function App() {
    const routes = useRoutes([{ path: "/", element: <Home /> }]);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>;
}

export default App;
