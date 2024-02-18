import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import "../Styles/Pixabay.css"

function Pixabay() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=41597445-9c8b0f27ec1f68133a6c5e9ae&q=${searchQuery}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.hits);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Background
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <div className="card">
        {users
          .filter((user) =>
            user.tags.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((user) => (
            <div className="card1">
                {users.filter(user => user.tags.toLowerCase().includes(searchQuery.toLowerCase())).map(user => (
                    <div key={user.id} className="main1">
                        <img className="imgcard" src={user.webformatURL} alt={user.tags} />  
                    </div>
                ))}
            </div>
          ))}
      </div>
    </>
  );
}

export default Pixabay;
