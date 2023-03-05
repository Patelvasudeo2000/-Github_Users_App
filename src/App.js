import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Component/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUserData(data);
      });
  }, []);
  return (
    <>
      <h1>Github Users App</h1>
      <div className="card-container">
        {userData.map((user) => {
          // console.log(user.login);
          return (<Card 
          userName={user.login}
          profilePic={user.avatar_url} 
          profileUrl={user.html_url} 
          />);
        })}
      </div>
    </>
  );
};

export default App;
