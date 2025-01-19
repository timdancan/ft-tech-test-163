import React from 'react';

const Instrument = ({instrument}) => {
    const quote = instrument.quote

    const percentageChange = ((quote.lastPrice - quote.previousClosePrice) / quote.previousClosePrice) * 100;

    function truncateToThreeWords(input) {
        return input.split(" ").slice(0, 3).join(" ");
    }

    return (
        <li className='instrument'>
            <h4 className='instrumentTitle'>{truncateToThreeWords(instrument.basic.name)}</h4>
            <p className={percentageChange > 0 ? 'green' : 'red'}>{`${percentageChange.toFixed(2)}%`}</p>
        </li>
    );
};

export default Instrument;