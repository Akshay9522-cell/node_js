import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h1>welcome</h1>
      <h4>{localStorage.getItem('username')}</h4>
      <p>{localStorage.getItem('useremail')}</p>
    </div>
  )
}

export default Dashboard
