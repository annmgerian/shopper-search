import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const tripColumns = [
    {id: 'fromName', label: 'From', minWidth: 400, align: 'left'},
    {
        id: 'toName',
        label: 'To',
        minWidth: 400,
        align: 'left',
    },
    {
        id: 'departAt',
        label: 'Departure time',
        minWidth: 400,
        align: 'left',
    },
    {
        id: 'vehicle',
        label: 'Vehicle',
        minWidth: 400,
        align: 'left',
    }
];

const styles =() => ({
    root: {
        width: '100%'
    },
    tableWrapper: {
        maxHeight: 407,
        overflow: 'auto'
    },
});

const Trip = props => {

    const {data} = props;

    return (
        <Paper className={styles.root}>
            {data.length !== 0 ?
                <div className={styles.tableWrapper}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {tripColumns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{
                                            minWidth: column.minWidth
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data
                                .map(object => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={Math.random()}
                                        >
                                            {tripColumns.map(column => {
                                                const value = object[column.id];
                                                return (
                                                    <TableCell
                                                        key={Math.random()}
                                                        align={column.align}
                                                    >
                                                        {
                                                            value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </div> : <div>No search results, try to search another one</div>}
        </Paper>
    );
};

export default Trip;


