import React from 'react'
import { PropTypes } from 'prop-types'

export const Header = ({ date }) => {
    return (
        <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
                <span className="ui-datepicker-month">
                    {date.toLocaleString('ru', {
                        month: 'long'
                    })}
                </span>
                &nbsp;
                <span className="ui-datepicker-year">
                    {date.toLocaleString('ru', {
                        year: 'numeric'
                    })}
                </span>
            </div>
        </div>
    )
}

Header.propTypes = {
    date: PropTypes.instanceOf(Date)
}
