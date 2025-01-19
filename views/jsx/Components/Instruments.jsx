import React from 'react';
import Instrument from "./Instrument";

const Instruments = ({data}) => {

    return (
        <ul className='instruments'>
            {data.length && data.map(instrument => (
                <Instrument key={instrument.symbolInput} instrument={instrument} />
            ))}
        </ul>
    );
};

export default Instruments;