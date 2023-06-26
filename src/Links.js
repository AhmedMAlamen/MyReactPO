import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Projects from './components/Projects'

const Links = () => {
    const router = createBrowserRouter([
      {
        path:'/src/components/Projects',
        element:<Projects/>
      }
    ])
    return <div>
      <RouterProvider router={router}/>
    </div>
  }
  export default Links