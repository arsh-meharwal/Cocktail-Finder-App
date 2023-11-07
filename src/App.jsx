import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Cocktail,
} from './pages';
import { loader as landingLoader } from './pages/Landing.jsx';
import { loader as singlepageloader} from './pages/Cocktail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement:<h2>Error here..</h2>,
        loader: landingLoader,
        
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/landing",
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "/cocktail/:id",
        element: <Cocktail />,
        loader: singlepageloader,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
