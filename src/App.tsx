import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { routerConfig } from './router/router'

const router = createBrowserRouter(routerConfig)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
