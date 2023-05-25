import React from 'react';
import PropTypes from 'prop-types';
import {Day} from "../days/Day";
import {OtherMonthDay} from "../days/OtherMonthDay";
import {Today} from "../days/Today";

export const DAY = {OTHER: 0, SIMPLE: 1, TODAY: 2};

export const CalendarRow = ({week,}) => {
    return (
        <tr>
            {week.map(
                day =>
                    day.type === DAY.SIMPLE ?
                        <Day day={day.num}/> :
                        day.type === DAY.OTHER ?
                            <OtherMonthDay day={day.num}/> :
                            <Today day={day.num}/>
            )}
        </tr>
    );
}

CalendarRow.propTypes = {
    week:PropTypes.array
};
