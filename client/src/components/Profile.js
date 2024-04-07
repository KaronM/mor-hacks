import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Update currentUser when authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    // Clean up listener on unmount
    return () => unsubscribe();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Welcome to Your Profile</h2>
      {currentUser ? (
        <div>
          <p style={{ fontSize: "18px" }}>{`You are currently signed in as: ${currentUser.email}`}</p>
          <main style={{ marginTop: "20px", fontSize: "16px" }}>This is your personal profile page. Feel free to explore and manage your account settings.</main>
          <button
            style={{
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
              fontSize: "16px",
              transition: "background-color 0.3s",
            }}
            onClick={userSignOut}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#d32f2f";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#f44336";
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <p style={{ fontSize: "18px" }}>You are not currently signed in. Please sign in to access your profile.</p>
      )}
    </div>
  );
};

export default Profile;

