import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import Add from "./pages/Add";
import GigList from "./pages/GigList";
import Header from "./components/Header";
import HeaderStyled from "./components/HeaderStyled";
import Landing from "./pages/Landing";

function App() {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    getGigs();
  }, []);

  const getGigs = async (gig) => {
    // setGigs([gig, ...gigs]); // via state

    //fetch data json server
    const response = await fetch("/gigs");
    const data = await response.json();
    console.log(data);
    setGigs([data, ...gigs]);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Landing />
              <Header />
            </>
          }
        />
        <Route
          path='/gigs'
          element={
            <>
              <HeaderStyled />
              <GigList gigs={gigs} />
            </>
          }
        />

        <Route
          path='/add'
          element={
            <>
              <HeaderStyled />
              <Add getGigs={getGigs} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
