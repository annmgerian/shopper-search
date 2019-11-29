import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Filter = props => {

    const {departurePoints, arrivalPoints, pointFilter, filterByDeparture, filterByArrival} = props;

    return (
        <>
            <Typography style={{marginTop: '5px'}}>
                Departure points
            </Typography>
            <div style={{display: 'inline-grid'}}>
                {departurePoints
                    .map(point => (
                            <FormControlLabel
                                style={{marginTop: '10px'}}
                                key={Math.random()}
                                control={
                                    <Checkbox
                                        checked={pointFilter.departure.indexOf(point) !== -1}
                                        onChange={() => filterByDeparture(point)}
                                        value="checkedB"
                                        color="primary"
                                    />
                                }
                                label={point}
                            />
                        )
                    )

                }
            </div>
            <Typography style={{marginTop: '5px'}}>
                Arrival points
            </Typography>
            <div style={{display: 'inline-grid'}}>
                {arrivalPoints
                    .map(point => (
                            <FormControlLabel
                                key={Math.random()}

                                style={{marginTop: '10px'}}
                                control={
                                    <Checkbox
                                        checked={pointFilter.arrival.indexOf(point) !== -1}
                                        onChange={() => filterByArrival(point)}
                                        value="checkedB"
                                        color="primary"
                                    />
                                }
                                label={point}
                            />
                        )
                    )

                }
            </div>
        </>
    );
};

export default Filter;


