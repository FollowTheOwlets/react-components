import React from 'react'
import { Header } from './headers/Header'
import { MatearialHeader } from './headers/MatearialHeader'
import PropTypes from 'prop-types'
import ColGroup from './table_elements/ColGroup'
import Thread from './table_elements/Thread'

export const Calendar = ({ now }) => {
    return (
        <div className="ui-datepicker">
            <MatearialHeader now={now} />
            <Header now={now} />
            <table className="ui-datepicker-calendar">
                <ColGroup now={now} />
                <Thread now={now} />
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

Calendar.propTypes = {
    now: PropTypes.instanceOf(Date)
}
