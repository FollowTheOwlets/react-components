import React from 'react'
import { PropTypes } from 'prop-types'

export const Today = ({ day }) => {
    return (
        <td className="ui-datepicker-today">{day}</td>
    )
}

Today.propTypes = {
    day: PropTypes.number
}