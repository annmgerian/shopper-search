import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    search_root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 600
    },
    search_input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    search_iconButton: {
        padding: 10
    },
    search_divider: {
        height: 28,
        margin: 4
    },
});

const Search = props => {

    const { searchValue, handleSearchChange,handleSearch} = props;

    return (
        <Paper className={styles.search_root}>
            <InputBase
                onChange={handleSearchChange}
                className={styles.search_input}
                placeholder='Search'
                value={searchValue}
            />
            <IconButton
                className={styles.search_iconButton}
                onClick={handleSearch}
                aria-label="search"
            >
                <SearchIcon/>
            </IconButton>
            <Divider
                className={styles.search_divider}
                orientation="vertical"
            />
        </Paper>
    );
};

export default Search;

