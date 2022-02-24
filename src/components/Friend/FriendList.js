import React, { useState, useEffect } from 'react';
import { getAllFriends } from '../../modules/FriendManager';
import { deleteFriend } from '../../modules/FriendManager';
import { useNavigate } from 'react-router-dom';
import { FriendCard } from './FriendCard';

export const FriendList = () => {

    const [friends, setFriends] = useState([]);
    const navigate = useNavigate();

    const getFriends = () => {
        return getAllFriends().then(friendsFromAPI => {
          // We'll do something more interesting with this data soon.
          setFriends(friendsFromAPI)
        });
      };
    
      useEffect(() => {
        getFriends();
      }, []);

      const handleDeleteFriend = id => {
        deleteFriend(id)
        .then(() => getAllFriends().then(setFriends));
    };
    
      return (
    

        <div className="container-cards">
            <section className="section-content">
            </section>
          {friends.map(friend => 
          <FriendCard 
          key={friend.id} 
          friend={friend} 
          handleDeleteFriend={handleDeleteFriend} />)}
        </div>
      );
          };


