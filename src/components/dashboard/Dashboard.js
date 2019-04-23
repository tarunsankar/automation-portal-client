import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { getCards } from '../../store/actions/dashboardActions';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getCards();
    }

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
        cards : state.dashboard.cards
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCards: () => dispatch(getCards())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);