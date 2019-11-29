import React from 'react';
import Filter from "./Filter";
import {connect} from 'react-redux';
import {setData} from "../../redux/actions";

const startData = [
    {
        "fromName": "Berlin, Germany",
        "toName": "Kyiv, Ukraine",
        "departAt": "2019-05-29T00:00:00.000Z",
        "vehicle": "plane"
    },
    {
        "fromName": "Berlin, Germany",
        "toName": "Dnipro, Ukraine",
        "departAt": "2019-06-02T00:00:00.000Z",
        "vehicle": "car"
    },
    {
        "fromName": "London, UK",
        "toName": "Kyiv, Ukraine",
        "departAt": "2019-06-07T00:00:00.000Z",
        "vehicle": "plane"
    },
    {
        "fromName": "Lyon, France",
        "toName": "Kyiv, Ukraine",
        "departAt": "2019-06-07T00:00:00.000Z",
        "vehicle": "plane"
    },
    {
        "fromName": "Moscow, Russia",
        "toName": "Kyiv, Ukraine",
        "departAt": "2019-06-08T00:00:00.000Z",
        "vehicle": "car"
    },
    {
        "fromName": "Kyiv, Ukraine",
        "toName": "Berlin, Germany",
        "departAt": "2019-05-30T00:00:00.000Z",
        "vehicle": "train"
    }
];

class FilterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrivalPoints: [],
            departurePoints: [],
            pointFilter: {arrival: [], departure: []}
        };
        this.filterByArrival = this.filterByArrival.bind(this);
        this.filterByDeparture = this.filterByDeparture.bind(this);

    }

    filterByArrival(point) {
        const {pointFilter} = this.state;
        let el = pointFilter.arrival.indexOf(point);
        if (el === -1)
            pointFilter.arrival.push(point);
        else
            pointFilter.arrival.splice(el, 1);
        if (pointFilter.arrival.length !== 0) {
            let newData = [];
            startData.forEach(object => {
                if (pointFilter.arrival.indexOf(object.toName) !== -1)
                    newData.push(object)
            });
            this.props.setData(newData);
        } else if (pointFilter.departure.length === 0)
            this.props.setData(startData);
        else {
            let newData = [];
            startData.forEach(object => {
                if (pointFilter.departure.indexOf(object.fromName) !== -1)
                    newData.push(object)
            });
            this.props.setData(newData);
        }
        this.setState({pointFilter: {...pointFilter, ...pointFilter.arrival}});
    }

    filterByDeparture(point) {
        const {pointFilter} = this.state;
        let el = pointFilter.departure.indexOf(point);
        if (el === -1)
            pointFilter.departure.push(point);
        else
            pointFilter.departure.splice(el, 1);
        if (pointFilter.departure.length !== 0) {
            let newData = [];
            startData.forEach(object => {
                if (pointFilter.departure.indexOf(object.fromName) !== -1)
                    newData.push(object)
            });
            this.props.setData(newData);
        } else if (pointFilter.arrival.length === 0)
            this.props.setData(startData);
        else {
            let newData = [];
            startData.forEach(object => {
                if (pointFilter.arrival.indexOf(object.toName) !== -1)
                    newData.push(object)
            });
            this.props.setData(newData);
        }
        this.setState({pointFilter: {...pointFilter, ...pointFilter.departure}});

    }

    render() {
        const {pointFilter} = this.state;
        const {arrivalPoints, departurePoints} = this.props;
        return (
            <Filter departurePoints={departurePoints} arrivalPoints={arrivalPoints}
                    filterByArrival={this.filterByArrival} filterByDeparture={this.filterByDeparture}
                    pointFilter={pointFilter}/>
        );
    }
}

const mapStateToProps = store => ({
    arrivalPoints: store.arrivalPoints,
    departurePoints: store.departurePoints
});

const mapDispatchToProps = dispatch => ({
    setData: (data) => dispatch(setData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
