import React, { useEffect, useState } from "react";
import "./FollowersList.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    try {
        const { data } = await axios.get("https://randomuser.me/api");
        setFollowers(data.results);
    } catch (error) {
        setFollowers([]);
    }

  };
  const getFollowers = () => {
     return followers && followers.length > 0  ?  (
      <div>
        {followers.map((follower, index) => (
          <div
            className="follower-item"
            data-testid={`follower-item-${index}`}
            key={index}
          >
            <img src={follower.picture.large}  alt="alt"/>
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
    ) : <div>No Records Found</div>;
  };
  return (
    <div className="followerslist-container">
      {getFollowers()}
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
