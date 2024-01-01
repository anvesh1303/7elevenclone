import React, { useEffect } from 'react'
import axios from 'axios'
import '../Deals.css'
import { useDispatch, useSelector } from 'react-redux';
import { Dealobj, setDeals } from '../redux/dealSlice';
import { RootState } from '../redux/store';


const Deal: React.FC = () =>{

    
    const dispatch = useDispatch();
    const dealsData = useSelector<RootState, Dealobj[]>((state: RootState)=> state.deals.filteredDeals);

    useEffect(()=>{
        async function fetchdata(){
            const rawdata = await axios.get('http://localhost:5000/deals');
            const deals: Dealobj[] = await rawdata.data;
            console.log(deals);
            dispatch(setDeals(deals))
        }
        fetchdata();
    },[dispatch])


    return (
        <div>
          <div>
            <div className='heading'>DEALS</div>
            <hr/>
            <ul className={`maincontent `}>
              {dealsData && dealsData.map((deal: Dealobj) => (
                <li className={`deal`} key={deal._id}>
                  <img src={deal.ImageUrl} alt='dealimg'/>
                  <div className='deal-description' data-testid="deal-description">{deal.Description}</div>
                  <div className='deal-disclaimer' data-testid="deal-disclaimer">{deal.Disclaimer}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default Deal