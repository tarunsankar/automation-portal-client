import React, { Component } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { getCards } from '../../store/actions/dashboardActions';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {

    componentDidMount() {
        const { cards, token } = this.props;

        if(token){
            this.props.getCards();
        }
    }

    render () {

        const { cards, token } = this.props;

        if(!token){
            return <Redirect to='/login' />
        }

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
        cards : state.dashboard.cards,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCards: () => dispatch(getCards())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);