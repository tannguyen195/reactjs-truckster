import React, { Component } from 'react';
import './_calendar.less'
import BigCalendar from 'react-big-calendar'
import { Button, Popover, Tooltip } from 'antd'
import moment from 'moment'
import TitleLink from '../../common/titleLink'
const truckIcon = require("/static/images/truck.svg")
const breweryIcon = require("/static/images/brewery.svg")
BigCalendar.momentLocalizer(moment);

const Content = ({ info }) => (
    <div>
        <div className="address Body-1RegularBlackLeft">
            {info.address || info.name}
        </div>
        <div className="time CaptionGreyLeft">
            {moment(info.timeDisplay,"YYYY-MM-DD hh:mm a").format("ddd, MMMM DD hh:mm:a")} - {moment(info.end_time).format("hh:mm:a")}
        </div>

    </div>
);

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthLabel: moment(new Date()).endOf('month').format('MMMM YYYY'),
            currentMonth: moment(new Date()).endOf('month').format('MMMM YYYY'),
            nextMonth: moment(new Date()).endOf('month').format('MMMM YYYY'),
        };

    }
    getCalendarEvents = (date) => {

        const currentMonth = moment(date).endOf('month').format('MMMM YYYY');
        const monthToday = moment(date).endOf('month').format('MMM');
        let nextCurrentMonth = moment(date).add(1, 'month').format('MMM');

        this.setState({
            monthLabel: currentMonth,
            currentMonth: monthToday,
            nextMonth: nextCurrentMonth
        });
    }
    getCustomEvent = (event) => {
        return <Popover className="marker-container"
            content={<Content info={event.event} />}
            title={event.event.food_truck ?
                <div className="custom-event">
                    {
                        event.event.food_truck.logo ?
                            <img className="truck-icon" alt="truck-icon" src={event.event.food_truck.logo[0].url} /> :
                            <img className="truck-icon-holder" alt="truck-icon-holder" src={truckIcon} />
                    }

                    <TitleLink
                        url="/truck/"
                        title={event.event.food_truck.name}
                        id={event.event.food_truck.id} >

                        {event.event.food_truck.name}
                    </TitleLink>
                </div>
                :
                event.event.location_name}>
            <div style={{
                opacity: moment(event.event.timeDisplay, "YYYY-MM-DD hh:mm a") > moment() ? 1 : 0.5
            }} className="event-schedule-icon">

                <img alt="icon" style={{
                    background: event.event.brewery ?
                        '#ffd35e' : '#f32126'
                }}
                    src={event.event.brewery ?
                        breweryIcon : truckIcon} />
            </div>
        </Popover>
    }
    getCustomToolbar = (toolbar) => {
        this.toolbarDate = toolbar.date;
  
        const goToMonthView = () => {
            toolbar.onViewChange('month');
        }
        const goToBack = () => {
            let mDate = toolbar.date;
            let newDate = new Date(
                mDate.getFullYear(),
                mDate.getMonth() - 1,
                1);
            toolbar.onNavigate('prev', newDate);
            this.getCalendarEvents(newDate);

        }
        const goToNext = () => {
            let mDate = toolbar.date;
            let newDate = new Date(
                mDate.getFullYear(),
                mDate.getMonth() + 1,
                1);
            toolbar.onNavigate('next', newDate);
            this.getCalendarEvents(newDate);

        }
        return (
            <div className="toolbar-container SubheadingBlackLeft">
                <div className="navigation-buttons">

                    <label className='label-date'>{this.state.monthLabel}</label>
                </div>
                <div className="filter-container">
                    <Button shape="circle" onClick={goToBack} icon="left" />
                    <Button shape="circle" onClick={goToNext} icon="right" />
       

                    <Tooltip title="Month View">
                        <Button shape="circle" onClick={goToMonthView} icon="table" />
                    </Tooltip>

                </div>
            </div >
        )
    }
    render() {
        const { events, handleClickEvent } = this.props

        return (
            <div > <BigCalendar
                selectable
                events={events}
                defaultView="month"
                scrollToTime={new Date(1970, 1, 1, 6)}
                defaultDate={new Date()}

                onSelectEvent={handleClickEvent}

                components={{
                    toolbar: this.getCustomToolbar,
                    event: this.getCustomEvent
                }}
            /></div >
        )
    }
}

export default Calendar