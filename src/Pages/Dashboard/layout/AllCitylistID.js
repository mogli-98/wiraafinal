
import React,{useEffect,useState} from 'react';
import Switchform from '../../../Model/switch.model';


function AllCitylistID({ selectedOption }) {
    const [cityList , setallcity]=useState();
    console.log(selectedOption)
    useEffect(() => {
        if(selectedOption) {
            const countryId = (selectedOption);
            Switchform.AllCityListId({countryId}).then((response) => {
                setallcity(response.data)
                console.log(response.data)
            })
        }
        
    }, [selectedOption])
  return (
    <div>
    
      <select  style={{ width: "-webkit-fill-available", height: "40px" ,border: '2px solid lightgrey',borderRadius:"8px"}} name='cityId' required>
      {
                    cityList && cityList.map((categorylist) =>
                        <option value={categorylist.CityID} >{categorylist.CityName}</option>)
                }
       
      </select>
    </div>
  );
}

export default AllCitylistID;
