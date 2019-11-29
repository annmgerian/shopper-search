import React from 'react';
import Search from "../components/Search/SearchContainer";
import Trip from "../components/Trip/TripContainer";
import Filter from "../components/Filter/FilterContainer";
import {Provider} from 'react-redux';
import store from '../redux/store/index';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Search/>
                <Filter/>
                <Trip/>
            </Provider>
        );
    }
}

export default Index;
