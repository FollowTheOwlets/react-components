import React from 'react'
import { PropTypes } from 'prop-types'

export const Header = ({ now }) => {
    return (
        <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
                <span className="ui-datepicker-month">
                    {now.toLocaleString('ru', {
                        month: 'long'
                    })}
                </span>
                &nbsp;
                <span className="ui-datepicker-year">
                    {now.toLocaleString('ru', {
                        year: 'numeric'
                    })}
                </span>
            </div>
        </div>
    )
}

Header.propTypes = {
    now: PropTypes.instanceOf(Date)
}
