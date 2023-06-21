// import AuthLoader from "../services/auth/AuthLoader";
// import LayoutManager from "../layout/LayoutManager";
// import IsAuth from "../services/auth/IsAuth";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
// import IsGuest from "../services/auth/IsGuest";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import {Books} from "../pages/books";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_PATH} from "../utils";
import {toast} from "react-toastify";
import {Book} from "../pages/book";
// import Page from "../pages/page";


const Router = () => {

    const [website, setWebsite] = useState({})

    const getWebsite = () => {
        axios.get(
            BASE_PATH + '/website',
        ).then(res =>
            setWebsite(res.data.data)
        ).catch(err =>
            toast.error(err.response.data.errors[0].msg)
        )
    }

    useEffect(() =>
            getWebsite(),
        []
    )

    const router1 = createBrowserRouter([
        {
            path: '/',
            element: <Home website={website}/>
        },
        {
            path: 'home',
            element: <Home website={website}/>
        },
        {
            path: 'books',
            element: <Books website={website}/>
        },
        {
            path: 'book/:param',
            element: <Book website={website}/>},
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