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
import { FriendForm } from "./Friend/FriendForm"
import { MessageList } from "./message/MessageList"
import { MessageForm } from "./message/MessageForm"


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

            <Route path="/addFriend" element={
              
            <PrivateRoute>
              <FriendForm /> 
            
            </PrivateRoute> } />
                


        {/* This will render the Events page when localhost displays http://localhost:3000/events */}
        <Route path="/events/:eventId/edit" element={<EventEditForm />} /> {/*Renders an edit form for event cards. */}
        <Route exact path="/events" element={<EventList />} /> {/*Renders a list of event cards. */}
        <Route path="/events/create" element={<EventForm />} /> {/*Renders a form for events. */}

        
        <Route exact path="/messages" element={<MessageList />} /> 
        <Route path="/messages/create" element={<MessageForm />} /> 

      </Routes>
    </>
  )
        }
