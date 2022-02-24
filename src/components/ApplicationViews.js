// this is the article controller component 

import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { ArticleList } from "./article/ArticleList"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { FriendList } from "./Friend/FriendList"

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

        <Route exact path="/articles" 
        element={
            <PrivateRoute>

              Add component here
            </PrivateRoute>} />

        <Route exact path="/friends" element={
    
            <PrivateRoute>
              <FriendList />
            </PrivateRoute>} />
              

                <ArticleList />
            </PrivateRoute>
        } />

      </Routes>
    </>
  )
}