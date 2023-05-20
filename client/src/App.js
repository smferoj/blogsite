import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';


const Layout = ()=>{

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
 
}

const  router = createBrowserRouter([
  {path:"/",
  element: <Layout/>,
  children:[
{
  path:"/",
  element: <Home/>
},
{path:"/register",
  element: <Register/>
  },
  {path:"/login",
  element: <Login/>
  },
  {path:"/write",
  element: <Write/>
  },
  {path:"/single",
  element: <Single/>
  },
  ] 
  },
  
])
function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  );
}



export default App;
