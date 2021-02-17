import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export const Progress = ({title, value}) => {
    return (
        <div className="progress">
            <p>{title}</p>
            <LinearProgress variant="determinate" value={value} />
        </div>
    )
}
