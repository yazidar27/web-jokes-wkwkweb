import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import IntroPage from "../pages/IntroPage";
import TopJokes from "../pages/TopJokes";
import CreateJokes from "../pages/CreateJokes";
import ExploreJokes from "../pages/ExploreJokes";
import AboutPage from "../pages/AboutPage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <IntroPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'auth',
                children: [
                    {
                        path: 'register',
                        element: <RegisterPage />
                    }
                ]
            },
            {
                path: 'jokes',
                children: [
                    {
                        index: true,
                        element: <TopJokes />
                    }, {
                        path: 'create',
                        element: <CreateJokes />
                    },
                    {
                        path: 'explore',
                        element: <ExploreJokes />
                    }
                ],

            }
        ]
    }
])