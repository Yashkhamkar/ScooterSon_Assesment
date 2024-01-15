import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      window.location.href = "/login";
    }

    fetch("http://localhost:5000/api/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(userInfo).token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  return (
    <div className="profile-container">
      {userData && (
        <>
          <h2>User Profile</h2>
          <div className="profile-info">
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>isAdmin:</strong> {userData.isAdmin ? "Yes" : "No"}
            </p>
            <p>
              <strong>User ID:</strong> {userData._id}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
