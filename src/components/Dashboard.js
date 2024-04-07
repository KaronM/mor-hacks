import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Set up listener to update currentUser when authentication state changes
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
    <div>
      {currentUser && (
        <>
          <p>{`Signed In as ${currentUser.email}`}</p>
          <main>Page</main>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      )}
      {!currentUser && <p>You are not signed in</p>}
    </div>
  );
};

export default Dashboard;
