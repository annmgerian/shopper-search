import React from 'react';
import Filter from "./Filter";
import {connect} from 'react-redux';
import {setData} from "../../redux/actions";

class FilterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrivalPoints: [],
            departurePoints: [],
            pointFilter: {arrival: [], departure: []},
            data:{}
        };
        this.filterByArrival = this.filterByArrival.bind(this);
        this.filterByDeparture = this.filterByDeparture.bind(this);

    }

    filterByArrival(point) {
        const {pointFilter,data} = this.state;
        let el = pointFilter.arrival.indexOf(point);
        if (el === -1)
            pointFilter.arrival.push(point);
        else
            pointFilter.arrival.splice(el, 1);
        if (pointFilter.arrival.length !== 0) {
            let newData = [];
            data.forEach(object => {
                if (pointFilter.arrival.indexOf(object.toName) !== -1)
                    newData.push(object)
            });
            this.props.setData(newData);
        } else if (pointFilter.departure.length === 0)
            this.props.setData(data);
        else {
            let newData = [];
            data.forEach(object => {
                if (pointFilter.departure.indexOf(object.fromName) !== -1)
                    newData.push(object)
            });
            this.props.setData(newData);
        }
        this.setState({pointFilter: {...pointFilter, ...pointFilter.arrival}});
    }

    filterByDeparture(point) {
        const {pointFilter,data} = this.state;
        let el = pointFilter.departure.indexOf(point);
        if (el === -1)
            pointFilter.departure.push(point);
        else
            pointFilter.departure.splice(el, 1);
        if (pointFilter.departure.length !== 0) {
            let newData = [];
            data.forEach(object => {
                if (pointFilter.departure.indexOf(object.fromName) !== -1)
                    newData.push(object)
            });
            this.props.setData(newData);
        } else if (pointFilter.arrival.length === 0)
            this.props.setData(data);
        else {
            let newData = [];
            data.forEach(object => {
                if (pointFilter.arrival.indexOf(object.toName) !== -1)
                    newData.push(object)
            });
            this.props.setData(newData);
        }
        this.setState({pointFilter: {...pointFilter, ...pointFilter.departure}});

    }

    async componentDidMount() {
        let response = await fetch('/api/get-data');
        let data = await response.json();
        this.setState({data});
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
