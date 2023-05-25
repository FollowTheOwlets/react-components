import React from 'react'
import PropTypes from 'prop-types'
import {CalendarRow, DAY} from "./CalendarRow";

export const Body = ({date}) => {

    return (
        <tbody>
        {getWeeks(date).map((week) => <CalendarRow week={week}/>)}
        </tbody>
    )
}

const getWeeks = (date) => {

    let weeks = [];
    let days = [];
    let count = 0;
    let tempDay = new Date(date.getTime());
    tempDay.setDate(0 - (date.getDay() == 0 ? 6 : date.getDay() - 1));

    while (tempDay.getMonth() <= date.getMonth() || count !== 0) {
        if (tempDay.getMonth() !== date.getMonth()) {
            days.push({type: DAY.OTHER, num: tempDay.getDate()});
        } else if (tempDay.getMonth() === date.getMonth() && tempDay.getDate() === date.getDate()) {
            days.push({type: DAY.TODAY, num: tempDay.getDate()});
        } else {
            days.push({type: DAY.SIMPLE, num: tempDay.getDate()});
        }
        tempDay.setDate(tempDay.getDate() + 1);
        count++;

        if (count === 7) {
            weeks.push([...days]);
            days = [];
            count = 0;
        }
    }
    return weeks;
}

Body.propTypes = {
    now: PropTypes.instanceOf(Date)
}

