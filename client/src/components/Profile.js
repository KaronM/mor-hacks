import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);

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

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await fetch(`http://localhost:3001/getUserInfo?email=${email}`);

          if (!response.ok) {
              throw new Error('Failed to fetch user data');
          }

          const data = await response.json();
          setUserData(data.userData);
      } catch (error) {
          console.error('Error fetching user data:', error);
      }
  };
  
        


  return (
    <div style={{ textAlign: "center", paddingTop: "50px", minHeight: '60vh', fontFamily: "Arial, sans-serif", color: "#333", background: "lightblue"}}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#007bff" }}>Welcome to Your Profile</h2>
      {currentUser ? (
        <div>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>{`You are currently signed in as: ${currentUser.email}`}</p>
          <main style={{ marginTop: "20px", fontSize: "16px" }}>This is your personal profile page. Feel free to explore and manage your account settings.</main>
          <h2 style={{ fontSize: "20px", marginTop: "30px", color: "#28a745" }}>User Information</h2>
          <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "10px" }}>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginLeft: "10px", padding: "5px 10px", borderRadius: "5px", border: "1px solid #ccc" }} />
            </label>
            <button type="submit" style={{ backgroundColor: "#007bff", color: "#fff", border: "none", padding: "8px 20px", borderRadius: "5px", cursor: "pointer", transition: "background-color 0.3s" }}>Fetch User Data</button>
          </form>
          {userData && (
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ fontSize: "18px", color: "#007bff", marginBottom: "10px" }}>User Details</h3>
              <p>Feeling: {userData.feeling.value}</p>
              <p>Type: {userData.type.value}</p>
              <p>Severity: {userData.severity.value}</p>
              <p>Environmental Factors: {userData.environmentalFactors.value}</p>
              <p>Notes: {userData.notes.value}</p>
            </div>
          )}
          <button
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "30px",
              fontSize: "16px",
              transition: "background-color 0.3s",
            }}
            onClick={userSignOut}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#c82333";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#dc3545";
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

