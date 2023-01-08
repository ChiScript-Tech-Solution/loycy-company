import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components";
// import { About, Contact, Engineering, Hire, Home, Investment } from './pages';
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <AppRoutes />
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
