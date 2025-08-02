import { useState } from 'react'
import './App.css'
import Layout from './Layout'

function App() {
  return (
    <Layout currentPageName="Dashboard">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-slate-800">Welcome to your Dashboard</h1>
        <p className="text-slate-600 mt-2">Track your finances and investments here.</p>
      </div>
    </Layout>
  )
}

export default App
