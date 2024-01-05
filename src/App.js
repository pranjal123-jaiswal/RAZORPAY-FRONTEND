// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./Home";
import PaymentSuccess from "./paymentSuccess";

function App() {
  return (<Router>
    <Routes>
      <Route path = "/" element= {<Home/>}/>
      <Route path = "/paymentsuccess/:reference" element= {<PaymentSuccess/>}/>
    </Routes>
  </Router>
 
  );
}

export default App;
