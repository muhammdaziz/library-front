// import AuthLoader from "../services/auth/AuthLoader";
// import LayoutManager from "../layout/LayoutManager";
// import IsAuth from "../services/auth/IsAuth";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
// import IsGuest from "../services/auth/IsGuest";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
// import Page from "../pages/page";


const Router = () => {

    const router1 = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'home',
            element: <Home/>
        },
        {
            path: '404',
            element: <NotFound/>
        }
    ]);

    // const router2 = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <Page/>
    //     },
    //     {
    //         path: '/page',
    //         element: <Page/>
    //     }
    // ])



    return(
        <>
        {/*// <AuthLoader>*/}
        {/*//     <LayoutManager>*/}
        {/*        <IsAuth>*/}
                    <RouterProvider router={router1}/>
                {/*</IsAuth>*/}
                {/*<IsGuest>*/}
                {/*    <RouterProvider router={router2}/>*/}
                {/*</IsGuest>*/}
            {/*// </LayoutManager>*/}
        {/*// </AuthLoader>*/}
        </>
    )
}

export default Router;