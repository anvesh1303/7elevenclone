import React from 'react'
import '../Header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilteredDeals, setIsFoodDropdown } from '../redux/dealSlice';
import ButtonComp from '../authentication/ButtonComp';




const Header: React.FC = () =>{

    const location = useLocation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const updateFilteredDeals = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(setFilteredDeals(e.target.value))
    }


    const signout = () =>{
        navigate("/");
    }


    return(
        
        <div className='whole-page'> 
        
        {location.pathname!=="/" && 
            <div className='header-whole'>
                <img className='app-logo' src='https://djfburvpadczx.cloudfront.net/dealsimg/applogo.svg' alt='logo'/>
                <div className='location'>Pickup: 1975 KELLER PKWY</div>
                <input className='header-input' type="text" placeholder='What are you craving?' onChange={updateFilteredDeals}/>
                <button className='header-deals' onClick={()=>navigate("/deals")}>DEALS</button>
                <button className='header-shop' onClick={()=>navigate("/shop")}>SHOP</button>
                <button className='header-orders' onClick={()=>navigate("/orders")}>ORDERS</button>
                <div className='food-section' onMouseOver={() => dispatch(setIsFoodDropdown(true))}
                                                onMouseOut={() => dispatch(setIsFoodDropdown(false))}>
                    <button className='header-food'>FOOD</button>
                    <ul className='food-dropdown'>
                        <li>Bakery</li>
                        <li>Candy</li>
                        <li>Ice Cream</li>
                        <li>Fresh and Chilled</li>
                        <li>Hot Foods</li>
                        <li>Pizza</li>
                        <li>Snacks</li>
                        <li>Breakfast</li>
                    </ul>
                </div>

                
                <div className='test1'>
                
                <ButtonComp label="Sign Out" className='signout' btnfun={signout}></ButtonComp>
                </div>
                
                
            </div>

        }    
            
        </div>
    )
}
export default Header