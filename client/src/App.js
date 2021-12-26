import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Add from "./pages/Add";
import GigList from "./pages/GigList";
import Header from "./components/Header";
import HeaderStyled from "./components/HeaderStyled";
import Landing from "./pages/Landing";

function App() {
  const [gigs, setGigs] = useState([]);

  const getGigs = (gig) => {
    setGigs([gig, ...gigs]);
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
