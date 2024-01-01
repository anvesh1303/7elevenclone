import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../authentication/Login';
import Deal from './Deal';
import Header from './Header';
import Orders from './Orders';
import Shop from './Shop';
import '../eleven.css'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Routing = () =>{

    const loginSelector = useSelector((state: RootState)=>state.deals.login)


    return(
        <div>
            <Router>
            <div>
                <div className='site-header'>
                <Header/>
                </div>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path="/deals" element={loginSelector && <Deal/>}/>
                    <Route path='/shop' element={loginSelector && <Shop />} />
                    <Route path='/orders' element={loginSelector && <Orders/>} />
                </Routes>
            </div>
            </Router>
        </div>
    )
}

export default Routing