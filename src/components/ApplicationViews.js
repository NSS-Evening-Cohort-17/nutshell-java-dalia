import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { EventEditForm } from './Events/EventEditForm'
import { EventForm } from './Events/EventForm.js'
import { EventList } from "./Events/EventList"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

  const setAuthUser = (user) => {
    sessionStorage.setItem("nutshell_user", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
  }

  return (
    <>
      <Routes>

        <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route exact path="/register" element={<Register />} />
        <Route  path="/" element={
            <PrivateRoute>
              Add component here
            </PrivateRoute>
        } />

        {/* This will render the Events page when localhost displays http://localhost:3000/events */}
        <Route path="/events/:eventId/edit" element={<EventEditForm />} /> {/*Renders an edit form for event cards. */}
        <Route exact path="/events" element={<EventList />} /> {/*Renders a list of event cards. */}
        <Route path="/events/create" element={<EventForm />} /> {/*Renders a form for events. */}
      </Routes>

    </>
  )
}