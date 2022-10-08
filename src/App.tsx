import React from 'react'

import './assets/fonts/fonts.scss'
import 'scss-reset/_reset.scss'
import styles from './App.module.scss'

import Home from './pages/home/Home'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Favourite from './pages/favourite/Favourite'
import Rated from './pages/rated/Rated'
import Nav from './components/Nav/Nav'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/favourite',
    element: <Favourite />,
  },
  {
    path: '/rated',
    element: <Rated />,
  },
])

function App() {
  return (
    <div className={styles.container}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
