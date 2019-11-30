import React from 'react';
import Search from "./Search";
import {connect} from 'react-redux';
import {setData} from "../../redux/actions";

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }

    async componentDidMount() {
        let response = await fetch('/api/get-data');
        let data = await response.json();
        this.setState({data});
    }

    handleChange(e) {
        const{data}=this.state;
        if (e.target.value === '') {
            this.setState({value: e.target.value});
            this.props.setData(data);
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
