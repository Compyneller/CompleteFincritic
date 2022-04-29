import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./Components/Login/LogIn";
import Register from "./Components/Register/Register";
import ForgetPassword from "./Components/Login/Forget/ForgetPassword";
import RegistrationForm from "./Components/Register/RegistrationForm";
import Risk from "./Pages/Risk";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import FooterBrand from "./Components/FooterBrand/FooterBrand";
// import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Customer from "./Pages/Customer";
import PrivacyPolicy2 from "./Pages/PrivacyPolicy2";
import { useState } from "react";
function App() {
  const [selectCountry, setSelectCountry] = useState("");
  return (
    <div className="App">
      <Router>
        {/* <Dashboard /> */}
        <Switch>
          <Route exact path="/">
            <Home
              setSelectCountry={setSelectCountry}
              selectCountry={selectCountry}
            />{" "}
          </Route>
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/register-2" component={RegistrationForm} />
          <Route path="/risk" component={Risk} />
          <Route path="/privacy" component={PrivacyPolicy2} />
          <Route path="/customer" component={Customer} />
        </Switch>
        <Footer />
        <FooterBrand selectCountry={selectCountry} />
      </Router>
    </div>
  );
}

export default App;
