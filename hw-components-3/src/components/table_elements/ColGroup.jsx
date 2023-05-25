import React from 'react'
import PropTypes from 'prop-types'

const ColGroup = ({ now }) => {
    return (
        <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="ui-datepicker-week-end" />
            <col className="ui-datepicker-week-end" />
        </colgroup>
    )
}

ColGroup.propTypes = {
    now: PropTypes.instanceOf(Date)
}

export default ColGroup
