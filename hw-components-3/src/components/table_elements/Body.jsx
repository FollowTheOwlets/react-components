import React from 'react'
import PropTypes from 'prop-types'

const Body = ({ now }) => {
    const DAY = { OTHER: 0, SIMPLE: 1, TODAY: 2 };
    const days = [];
    const firstDay = new Date();
    firstDay.setDate(now.getDate() - now.getDay());
    while (!(firstDay.getMonth() !== now.getMonth() && firstDay.getDay === 6)) {
        if (firstDay.getMonth() !== now.getMonth()) {
            days.push([DAY.OTHER,])
        }
    };

    return (
        <tbody>
            { }
        </tbody>
    )
}

Body.propTypes = {
    now: PropTypes.instanceOf(Date)
}

export default Body
