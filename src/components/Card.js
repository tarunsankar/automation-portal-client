import React from 'react'

const Card = (props) => {

  const { cards } = props;
  const cardsData = cards.map(card => {
      return (
        <div className="col-md-4" key={card.id}>
            <div className="card card-chart">
                <div className={card.titleClass}>
                    <h4 className="card-title">{card.heading}</h4>
                    <p className="card-category"></p>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{card.subheading}</h4>
                    <p className="card-category">
                    <span className={card.status}><i className="fa fa-long-arrow-up"></i> {card.score}% </span> {card.statusText} in passed test cases.</p>
                </div>
                <div className="card-footer">
                    <div className="stats">
                        <i className="material-icons">access_time</i> updated {card.time} ago
                    </div>
                </div>
            </div>
        </div>
      )
  })

  return (<div className='row justify-content-md-center h-100'>{cardsData}</div>)
}

export default Card
