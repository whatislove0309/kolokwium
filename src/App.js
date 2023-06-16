import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import MKhome from './components/MKhome';
import Header from './components/Header';
import MKpost from './components/MKpost';

function App() {

  return (
    <div className='app'>
      <div className="container-fluid">
        <div className="container">
          <Header />
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={MKhome} />
                    <Route path="/post/:id" component={MKpost} />
                </Switch>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
