import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'



export const Router = () => {
  return(
    <BrowserRouter>
      <AppRoutes />  
    </BrowserRouter>
  )
}