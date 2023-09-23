// Dropdown2.js
import React,{useEffect,useState} from 'react';
import Switchform from '../../../Model/switch.model';


function Dropdown2({ selectedOption }) {
    const [GetSubCategory , setGetSubCategory]=useState();
    console.log(selectedOption)
    useEffect(() => {
        if(selectedOption) {
            const categoryId = (selectedOption);
            Switchform.Allsubcategory({categoryId}).then((response) => {
                setGetSubCategory(response.data)
                console.log(response.data)
            })
        }
        
    }, [selectedOption])
  return (
    <div>
      <label></label>
      <select  style={{ width: "-webkit-fill-available", height: "40px" ,border: '2px solid lightgrey',borderRadius:"8px"}}>
      {
                    GetSubCategory && GetSubCategory.map((categorylist) =>
                        <option value={categorylist.CurriculumID} >{categorylist.subcategoryName}</option>)
                }
       
      </select>
    </div>
  );
}

export default Dropdown2;
