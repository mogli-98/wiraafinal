// Dropdown1.js
import React, { useEffect, useState } from 'react';
import Switchform from '../../../Model/switch.model';

function Dropdown1({ onSelect }) {
    const [GetSubCategory, setGetSubCategory] = useState([]);
    const [CountryList, setCountryList] = useState('');
    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        onSelect(selectedValue);
    };
    useEffect(() => {
        Switchform.AllCountryList().then((response) =>{
            console.log(response.data);
            setCountryList(response.data);
        });
    }, [])
    return (
        <div>
           <select id="cars"
                style={{ width: "-webkit-fill-available", height: "40px" ,border: '2px solid lightgrey',borderRadius:"8px"}}
                // onChange={handleDropdownChange}
                name='pR_FKCatID'
                placeholder='Category'
            >
                {
                    CountryList && CountryList.map((listCountry) =>
                        <option value={listCountry.CountryID}>{listCountry.CountryName}</option>)
                }
            </select>

        </div>
    );
}

export default Dropdown1;
