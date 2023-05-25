import React from 'react'
import { PropTypes } from 'prop-types'

export const MatearialHeader = ({ date }) => {
    return (
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">
                {date.toLocaleString('ru', {
                    weekday: 'long'
                })}
            </div>
            <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">
                    {date.toLocaleString('ru', {
                        day: 'numeric'
                    })}
                </div>
                <div className="ui-datepicker-material-month">
                    {date.toLocaleString('ru', {
                        month: 'long'
                    })}
                </div>
                <div className="ui-datepicker-material-year">
                    {date.toLocaleString('ru', {
                        year: 'numeric'
                    })}
                </div>
            </div>
        </div>
    )
}

MatearialHeader.propTypes = {
    date: PropTypes.instanceOf(Date)
}
