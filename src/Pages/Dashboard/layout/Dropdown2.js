import React, { useEffect, useState } from 'react';
import Switchform from '../../../Model/switch.model';


function Dropdown2({ selectedOption }) {
  const [GetSubCategory, setGetSubCategory] = useState();
  console.log(selectedOption)
  useEffect(() => {
    if (selectedOption) {
      const categoryId = (selectedOption);
      Switchform.Allsubcategory({ categoryId }).then((response) => {
        setGetSubCategory(response.data)
        console.log(response.data)
      })
    }

  }, [selectedOption])
  return (
    <div>
     
      <select style={{ width: "-webkit-fill-available", height: "40px", border: '2px solid lightgrey', borderRadius: "8px" }} name='subCategory'>
      <option value="" disabled selected>Select your Sub-category</option>
        {
          GetSubCategory && GetSubCategory.map((categorylist) =>
            <option value={categorylist.subcategoryId} >{categorylist.subcategoryName}</option>)
        }

      </select>
    </div>
  );
}

export default Dropdown2;
