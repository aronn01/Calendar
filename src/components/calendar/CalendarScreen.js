import React, { useEffect, useState } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';



import { Navbar } from '../ui/Navbar'
import { CalendarModal } from './CalendarModal';
import { CalendarEvent } from './CalendarEvent';

import { messages } from '../helpers/calendar-message-es'; 
import 'moment/locale/es'  // set it the calendar in spanish


import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveNote, eventSetActive, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es')
const localizer = momentLocalizer(moment);

// const events=[{
//   title:'cumpleanos del feje',
//   start: moment().toDate(), // same  = new Date()
//   end: moment().add(2,'hours').toDate(),
//   bgcolor:'#fafafa',
//   notes:'comprar el pastel',
//   user:{
//     _id:'123',
//     name:'Fernando'
//   }
// }]

export const CalendarScreen = () => {

   const dispatch = useDispatch();

   const {events,activeEvent} = useSelector(state=>state.calendar);
   
   const {uid} = useSelector(state=>state.auth);

   //TODO : Leer los eventos






 const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month')


  useEffect(() => {
    dispatch(eventStartLoading())
  
  }, [dispatch])
  
    const onDoubleClick=(e)=>{

       console.log('abrir modal');
       dispatch(uiOpenModal())
       

    }

    const onSelectEvent=(e)=>{
  
      dispatch(eventSetActive(e))
    


    }

    const onviewChange =(e)=>{
      setlastView(e)
      localStorage.setItem('lastView',e)
    }


    const onSelectSlot=(e)=>{
        // console.log(e);
        dispatch(eventClearActiveNote())

    }

    const eventStyleGetter=(event, start, end,isSelected)=>{

      
      const style={
        backgroundColor:(uid===event.user._id)?'#367cf7':'#465660',
        borderRadios:'0px',
        opacity:0.8,
        display:'block',
        color:'white'

      } 
     
      return{
        style
      }

    }

  return (
    <div className='calendar-screen'>

      <Navbar/>

      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      messages={messages}
      style={{ height: 500 }}
      eventPropGetter={eventStyleGetter}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelectEvent}
      onView={onviewChange}
      onSelectSlot={onSelectSlot}
      selectable={true}
      view={lastView}
      components={{
        event:CalendarEvent
      }}
    />

{
  (activeEvent)&&<DeleteEventFab/>
}

<CalendarModal/>

<AddNewFab/>
    </div>
  )
}
