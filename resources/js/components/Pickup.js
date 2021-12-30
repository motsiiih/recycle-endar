import React from 'react';
import { get } from 'lodash';

export const Pickup = ({ pickup }) => {
    let id = get(pickup, 'id', { id: 'Unknown id' });
    let weekday = get(pickup, 'weekday', { weekday: 'Unknown weekday' });
    let type = get(pickup, 'type', { type: 'Unknown type' });
    let start = get(pickup, 'start', { start: 'xx:xx' });
    let end = get(pickup, 'end', { end: 'xx:xx' });

    return (
        <div>
            <h4>{type}</h4>
            <h5>{start.slice(0, 5)} - {end.slice(0, 5)}</h5>
        </div>
    )
}

export default Pickup;