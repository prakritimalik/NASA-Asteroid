import React from 'react';
import Asteroid from './Asteroid';
import AsteroidList from './AsteroidList';
import AsteroidDetail from './AsteroidDetail';
import Navigation from './Navigation';
import { BrowserRouter, Route } from "react-router-dom";
import SearchByDate from './SearchByDate';
import SearchByID from './SearchByID';

const App = () => {
    return (
        <div>
        <BrowserRouter>
                <div>
                    <Navigation />
                   
                    <Route path="/asteroid-list" exact component={AsteroidList} />
                    <Route path="/search-asteroid-id" exact component={SearchByID} />
                    <Route path="/search-asteroid-date" exact component={SearchByDate} />
                    <Route path="/asteroid-detail/:id" exact component={AsteroidDetail}/>
                    <Route path="/" exact component={AsteroidList} />
                </div>
            </BrowserRouter>
        </div>
    )
}
export default App;