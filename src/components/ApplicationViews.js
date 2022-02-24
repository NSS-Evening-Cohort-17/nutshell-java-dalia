import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { Home } from "./Home.js"
import { TaskList } from "./Tasks/TaskList"
import { TaskDetail } from "./Tasks/TaskDetail"
import { TaskForm } from "./Tasks/TaskForm"

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
                    <Home />
            </PrivateRoute>
        } />
        <Route excat path="/tasks" element={
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
      </Routes>

    </>
  )
}