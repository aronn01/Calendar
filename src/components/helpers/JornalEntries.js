import React from 'react'
import {JornalEntry} from './JornalEntry'
import { useSelector } from 'react-redux'

export const JornalEntries = () => {

  const {notes} = useSelector(state=>state.notes);

  console.log(notes);


  return (
    <div className='Journal__entries '>


       {
       notes.map(note=>(
       <JornalEntry
        key={note.id}
        {...note}

       />
       ))
       }
       


    </div>
  )
}


