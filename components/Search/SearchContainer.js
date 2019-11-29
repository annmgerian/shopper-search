import React from 'react';
import Search from "./Search";
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

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }

    handleChange(e) {
        if (e.target.value === '') {
            this.setState({value: e.target.value});
            this.props.setData(startData);
        } else
            this.setState({value: e.target.value});
    }

    search() {
        const {data} = this.props;
        const {value} = this.state;
        let regexp = new RegExp(value, 'gi');
        let newData = [];
        data.forEach(object => {
            let from = object.fromName.match(regexp);
            let to = object.toName.match(regexp);
            if (from || to)
                newData.push(object)
        });
        this.props.setData(newData);
    }


    render() {
        const {value} = this.state;
        return (
            <Search searchValue={value} handleSearchChange={this.handleChange} handleSearch={this.search}/>
        );
    }
}

const mapStateToProps = store => ({
    data: store.data,
});

const mapDispatchToProps = dispatch => ({
    setData: (data) => dispatch(setData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
