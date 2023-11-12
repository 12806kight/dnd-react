import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://www.dnd5eapi.co/api/classes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.results);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.index}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
