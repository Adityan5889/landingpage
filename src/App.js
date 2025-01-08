import logo from './logo.svg';
import './App.css';
import "./LandingPage.jsx";
import LandingPage from './LandingPage.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/LandingPage.jsx</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href={LandingPage}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */ src={LandingPage}}
        </a>
      </header>
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import LandingPage from './LandingPage';

// export default function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white">
//         <LandingPage />
//       </div>
//     </Router>
//   );
// }
