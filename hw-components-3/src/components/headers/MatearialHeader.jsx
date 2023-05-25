import React from 'react'
import { PropTypes } from 'prop-types'

export const MatearialHeader = ({ now }) => {
    return (
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">
                {now.toLocaleString('ru', {
                    weekday: 'long'
                })}
            </div>
            <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">
                    {now.toLocaleString('ru', {
                        day: 'numeric'
                    })}
                </div>
                <div className="ui-datepicker-material-month">
                    {now.toLocaleString('ru', {
                        month: 'long'
                    })}
                </div>
                <div className="ui-datepicker-material-year">
                    {now.toLocaleString('ru', {
                        year: 'numeric'
                    })}
                </div>
            </div>
        </div>
    )
}

MatearialHeader.propTypes = {
    now: PropTypes.instanceOf(Date)
}
