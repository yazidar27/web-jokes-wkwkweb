import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import IntroPage from "../pages/IntroPage";
import TopJokes from "../pages/TopJokes";
import CreateJokes from "../pages/CreateJokes";

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
                path: 'jokes',
                children: [
                    {
                        index: true,
                        element: <TopJokes />
                    }, {
                        path: 'create',
                        element: <CreateJokes/>
                    }
                ],

            }
        ]
    }
])