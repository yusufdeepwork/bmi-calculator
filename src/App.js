import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import {Home} from "./pages/Home";
import Profile from "./pages/Profile";
function App() {
    const [ibms, setIbms] = useState([]);

    const saveIbm = (ibm) => {
        const copyIbm = [...ibms];
        copyIbm.push(ibm)
        setIbms(copyIbm);
    }
    useEffect(()=>{
        console.log(ibms)
    },[ibms])
    return (
    <Router >
        <Switch>
            <Route path="/" exact={true}>
                <Layout><Home saveIbm={saveIbm}/></Layout>
            </Route>
            <Route path="/profile">
                <Layout><Profile ibms={ibms}/></Layout>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
