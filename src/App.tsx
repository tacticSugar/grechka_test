import React from 'react'

import './assets/fonts/fonts.scss'
import 'scss-reset/_reset.scss'
import styles from './App.module.scss'

import Card from './components/Card/Card'
import CardList from './components/CardList/CardList'

function App() {
  return (
    <div className={styles.container}>
      <CardList />
    </div>
  )
}

export default App
