//import logo from './logo.svg';
import React, { useState } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'react-bootstrap';
//
import WelcomePage from './components/WelcomePage';
import CalcPage from './components/CalcPage';
import TodoPage from './components/TodoPage';
import MoviePage from './components/MoviePage';

function SelectPage(props){
    switch (props.activePage){
        case 'WelcomePage':
            return <WelcomePage/>
            break;
        case 'CalcPage':
            return <CalcPage/>
            break;
        case 'TodoPage':
            return <TodoPage/>
            break;
        case 'MoviePage':
            return <MoviePage/>
            break;
    }
}

function App() {
    const [activePage, setActivePage] = useState('WelcomePage');

    

    return (
    <div className="container ">
        <div className='row justify-content-center mb-4'>
            <button className='btn btn-light col-2' data-toggle="button" aria-pressed="false" onClick={() => setActivePage('WelcomePage')}>welcome</button>
            <button className="btn btn-light col-2" data-toggle="button" aria-pressed="false" onClick={() => setActivePage('CalcPage')}>calculator</button>
            <button className="btn btn-light col-2" data-toggle="button" aria-pressed="false" onClick={() => setActivePage('TodoPage')}>todolist</button>
            <button className="btn btn-light col-2" data-toggle="button" aria-pressed="false" onClick={() => setActivePage('MoviePage')}>movierating</button>
        </div>
        <section>
            <SelectPage activePage = {activePage}/>
        </section>
    </div>
    );
}

export default App;
