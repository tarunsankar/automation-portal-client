const initState = {
    user : {},
    cards : [
        {id:1, heading:'Workday', subheading:'Test Automation', titleClass:'card-header-success', score:'55', status:'text-danger', time: '4 minutes', statusText: 'decrease'},
        {id:2, heading:'Oracle Cloud', subheading:'Test Automation', titleClass:'card-header-danger', score:'15', status:'text-success', time: '11 hours', statusText: 'increase'},
        {id:3, heading:'Oracle eBusiness Suite', subheading:'Test Automation', titleClass:'card-header-success', score:'30', status:'text-danger', time: '4 minutes', statusText: 'decrease'},
        {id:4, heading:'PeopleSoft', subheading:'Test Automation', titleClass:'card-header-danger', score:'9', status:'text-success', time: '12 hours', statusText: 'increase'},
        {id:5, heading:'Kronos', subheading:'Test Automation', titleClass:'card-header-success', score:'55', status:'text-success', time: '36 hours', statusText: 'increase'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;