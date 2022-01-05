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

  const getGigs = async () => {
    // setGigs([gig, ...gigs]); // via state

    //console.log(gigs);

    //fetch data json server
    const response = await fetch("/gigs");
    const data = await response.json();
    //console.log(response);
    //console.log(data);
    setGigs(data);
  };

  const addNewGigs = async (gig) => {
    const response = await fetch("/gigs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gig),
    });
    // console.log(response);
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
              <Add addNewGigs={addNewGigs} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
