// Dropdown1.js
import React, { useEffect, useState } from 'react';
import Switchform from '../../../Model/switch.model';

function Dropdown1({ onSelect }) {
    const [GetSubCategory, setGetSubCategory] = useState([]);
    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        onSelect(selectedValue);
    };
    useEffect(() => {
        Switchform.Allcategory().then((response) => {
            setGetSubCategory(response.data)
            console.log(response.data)
        }
        )
    }, [])
    return (
        <div>
            <select id="cars"
                style={{ width: "-webkit-fill-available", height: "40px" ,border: '2px solid lightgrey',borderRadius:"8px"}}
                onChange={handleDropdownChange}
                name='category'
                placeholder='Category'
            >
                {
                    GetSubCategory && GetSubCategory.map((categorylist) =>
                        <option value={categorylist.CurriculumID}>{categorylist.CurriculumName}</option>)
                }
            </select>

        </div>
    );
}

export default Dropdown1;
