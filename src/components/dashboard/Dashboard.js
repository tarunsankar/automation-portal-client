import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';

class Dashboard extends Component {

    render () {

        const { cards } = this.props;

        document.body.classList.add("dashboard");
        return (
            <div className="apps row justify-content-md-center h-100">
                <Card cards={cards}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cards : state.cards
    }
}

export default connect(mapStateToProps)(Dashboard);