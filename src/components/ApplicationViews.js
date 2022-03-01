// this is the article controller component 

import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { ArticleList } from "./article/ArticleList"
import { ArticleForm } from "./article/ArticleForm"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { Home } from "./Home.js"
import { TaskList } from "./Tasks/TaskList"
import { TaskDetail } from "./Tasks/TaskDetail"
import { TaskForm } from "./Tasks/TaskForm"
import { EventEditForm } from './Events/EventEditForm'
import { EventForm } from './Events/EventForm.js'
import { EventList } from "./Events/EventList"
import { FriendList } from "./Friend/FriendList"
import { MessageCard } from "./message/MessageCard"

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

        <Route exact path="/" 
        element={
            <PrivateRoute>
                    <Home />
            </PrivateRoute>
        } />

        <Route exact path="/articles" 
        element={
            <PrivateRoute>
                <ArticleList />
            </PrivateRoute>} />
        <Route path="/articles/create" 
        element={
            <PrivateRoute>
                <ArticleForm />
            </PrivateRoute>} />

        <Route exact path="/tasks" element={
                <PrivateRoute>
                 <TaskList />
                </PrivateRoute>} />
                <Route path="/tasks/:taskId" element={
                <PrivateRoute>
                <TaskDetail />
                </PrivateRoute>
                } />
                <Route path="/tasks/create" element={
                <PrivateRoute>
                <TaskForm />
                </PrivateRoute>
                } /> 

        <Route exact path="/friends" element={
    
            <PrivateRoute>
              <FriendList />
            </PrivateRoute>} />


        {/* This will render the Events page when localhost displays http://localhost:3000/events */}
        <Route path="/events/:eventId/edit" element={<EventEditForm />} /> {/*Renders an edit form for event cards. */}
        <Route exact path="/events" element={<EventList />} /> {/*Renders a list of event cards. */}
        <Route path="/events/create" element={<EventForm />} /> {/*Renders a form for events. */}

        {/* This will render the Messages page when localhost displays http://localhost:3000/messages */}
        <Route exact path="/messages" element={<MessageCard />} /> {/*Renders a list of message cards. */}
        {/* <Route path="/messages/create" element={<MessageForm />} /> Renders a form for messages. */}

      </Routes>
    </>
  )
        }
