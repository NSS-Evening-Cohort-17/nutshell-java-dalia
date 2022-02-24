import React from "react"
import "./Friend.css"

export const FriendCard = ({ friend, handleDeleteFriend}) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-locationname">
            {friend.name}
          </span></h3>
          <button type="button" onClick={() => handleDeleteFriend(friend.id)}>Delete Friend</button>
        </div>
      </div>
    );
  }