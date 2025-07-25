//src/App.jsx
//We import our initialised Firebase app from the file we just created

import firebaseApp from "./firebase.js"

function App(){
  // A simple check to see if the firebaseApp object was created successfully
  const isConnected  = firebaseApp ? true: false;

  return (
    <div className="app-container">
    <h1> Udyam Leap</h1>
      {/* this is a conditional message. if the connection is successful, it shows the success message */}

      {isConnected? (
      <p style = {{ color: 'green' }} > 
        Successfully connected to Firebase!
      </p>) :
        (<p style = {{ color : 'red'}} > 
          Failed to connect to Firebase.
        </p>
        )
                  }
    </div>
  );
      }
        export default App;