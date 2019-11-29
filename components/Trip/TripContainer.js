import React from 'react';
import Trip from "./Trip";
import {connect} from 'react-redux';
import {setData, setDeparture, setArrival} from '../../redux/actions/index';

const data = [
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

class TripContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // value:'',
        };
    }

    componentDidMount() {
        this.props.setData(data)
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
