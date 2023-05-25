import React from 'react'
import { Header } from './headers/Header'
import { MatearialHeader } from './headers/MatearialHeader'
import PropTypes from 'prop-types'
import {ColGroup} from './table_elements/ColGroup'
import {Thread} from './table_elements/Thread'
import {Body} from "./table_elements/Body";

export const Calendar = ({ date }) => {
    return (
        <div className="ui-datepicker">
            <MatearialHeader date={date} />
            <Header date={date} />
            <table className="ui-datepicker-calendar">
                <ColGroup />
                <Thread />
                <Body date={date}/>
            </table>
        </div>
    )
}

Calendar.propTypes = {
    date: PropTypes.instanceOf(Date)
}
