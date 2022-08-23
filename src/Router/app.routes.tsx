import { Routes, Route } from 'react-router-dom'

import { FormStep1 } from '../pages/FormStep1'
import { FormStep2 } from '../pages/FormStep2'
// import { FormStep3 } from '../pages/FormStep3'

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/"  element={<FormStep1 />}/>
      <Route path="/step2"  element={<FormStep2 />}/>
      
    </Routes>
  )
}