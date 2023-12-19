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
            setGetSubCategory(response?.data)
            console.log(response?.data)
        })
            .catch((error) => {
                console.log(error);
            });
    }
        , [])
    return (
        <div >
            {
                GetSubCategory && GetSubCategory?.map((categorylist) =>
                    <div className='card' value={categorylist?.CurriculumID} style={{
                        borderStyle: "none",
                        flex: "1 1 30%",

                        margin: "8px"
                    }} >{categorylist?.CurriculumName}</div>

                )

            }
        </div>



    );
}

export default Dropdown1;
