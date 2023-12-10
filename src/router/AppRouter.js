import React, { useEffect } from 'react'
import { Routes,  Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoginScreen } from '../components/auth/LoginScreen'



import { CalendarScreen } from '../components/calendar/CalendarScreen'
import { startChecking } from '../actions/auth'


export const AppRouter = () => {

  const dispatch =useDispatch()

  const {checking, uid} = useSelector(state=>state.auth);


 

  useEffect(() => {

      dispatch(startChecking())
      
  }, [dispatch])


  if(checking){
    return<h5>Espere..</h5>
  }



  return (
    
    <>
      <div>
      <Routes>
        {!!uid ? (
          <Route path="/*" element={<CalendarScreen />} />
        ) : (
          <Route path="login/*" element={<LoginScreen />} />
        )}{" "}
        <Route path="/*" element={<Navigate to="login" />} />
      </Routes>
     </div>
    </>
      
 
  )
}
