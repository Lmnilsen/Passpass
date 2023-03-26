import { About } from "./components/About";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { MongoTest } from "./components/MongoTest";
import { Login } from "./components/Login";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/book-mongo',
    element: <MongoTest/>
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default AppRoutes;
