import React from 'react';
import Trip from "./Trip";
import {connect} from 'react-redux';
import {setData, setDeparture, setArrival} from '../../redux/actions/index';

class TripContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        let response = await fetch('/api/get-data');
        let data= await response.json();
        this.props.setData(data);
        let arrivalPoints = [];
        let departurePoints = [];
        data.forEach(object => {
            if (departurePoints.indexOf(object.fromName) === -1)
                departurePoints.push(object.fromName);
            else null;
            if (arrivalPoints.indexOf(object.toName) === -1)
                arrivalPoints.push(object.toName);
            else null;

        });
        this.props.setArrival(arrivalPoints);
        this.props.setDeparture(departurePoints);
    }


    render() {
        const {data} = this.props;
        return (
            <Trip data={data}/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setData: (data) => dispatch(setData(data)),
    setArrival: (arrivalPoints) => dispatch(setArrival(arrivalPoints)),
    setDeparture: (departurePoints) => dispatch(setDeparture(departurePoints)),
});
const mapStateToProps = store => ({
    data: store.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(TripContainer);
