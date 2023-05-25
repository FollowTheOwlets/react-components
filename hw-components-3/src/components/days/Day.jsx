import React from 'react'
import { PropTypes } from 'prop-types'

export const Day = ({ day }) => {
    return (
        <td>{day}</td>
    )
}

Day.propTypes = {
    day: PropTypes.number
}