import React from 'react'

const Card = (props) => {
  return (

    <div className="col-md-4">
        <div className="card card-chart">
            <div className="card-header card-header-success">
                <h4 className="card-title">Workday</h4>
                <p className="card-category"></p>
            </div>
            <div className="card-body">
                <h4 className="card-title">Test Automation</h4>
                <p className="card-category">
                <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> increase in passed test cases.</p>
            </div>
            <div className="card-footer">
                <div className="stats">
                    <i className="material-icons">access_time</i> updated 4 minutes ago
                </div>
            </div>
        </div>
    </div>

  )
}

export default Card
