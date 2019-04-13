import React from 'react'
import Card from '../components/Card';

const Dashboard = (props) => {

    document.body.classList.add("dashboard");
  
    return (
        <div className="apps row justify-content-md-center h-100">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Dashboard;