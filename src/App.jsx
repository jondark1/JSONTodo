import React from 'react'
import {
  Route, createBrowerRouter,
  createRoutesFromElements,
  RouterProvider
}
  from "react-router-dom"
import MainLayout from '@/layout/MainLayout'
import Todos from './pages/Todos'
import Todo from './pages/Todo'

const router = createBrowerRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<Todos />} />
      <Route path="/todo/:id" element={<Todo />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />

}

export default App