
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
            console.log(response.data)
        }
        ).catch((error) => {
            console.log(error);
        });
    }, [])
    return (
        <div>
            <select id="cars"
                style={{ width: "-webkit-fill-available", height: "40px", border: '2px solid lightgrey', borderRadius: "8px" }}
                onChange={handleDropdownChange}
                name='category'
                placeholder='Category'
            >
                <option value="" disabled selected>Select your Category</option>
                {
                    GetSubCategory && GetSubCategory?.map((categorylist) =>
                        <>

                            <option value={categorylist?.SuperCatID}>{categorylist?.CategoryName}</option>
                        </>)
                }
            </select>

        </div>
    );
}

export default Dropdown1;
