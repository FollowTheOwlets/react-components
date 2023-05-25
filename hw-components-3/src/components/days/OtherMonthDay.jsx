import React from 'react'
import { PropTypes } from 'prop-types'

export const OtherMonthDay = ({ day }) => {
    return (
        <td className="ui-datepicker-other-month">{day}</td>
    )
}

OtherMonthDay.propTypes = {
    day: PropTypes.number
}
