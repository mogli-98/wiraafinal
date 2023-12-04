import React, { useState } from 'react'
import SettingModal from '../../modal/Setting.modal';
import { helper } from '../../lib/helper';

const UpdateEmail = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  console.log('Token:', token);
  const [formData, setformData] = useState({
    email: '',
})
const handleInputChange1 = (event) => {
    setformData({
        ...formData,
        [event.target.name]: event.target.value,
    });
};
  const emailverify = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    SettingModal.UpdateEmail( token, form ).then((res) => {

         helper.sweetalert.toast("Your Email is Verifiyed")
         window.location.replace("/user/Settingd")
    }).catch((error) => {
         console.log(error);
    });

}
  return (
    <div>
      <h4>UPDATE EMAIL</h4>
      <form onSubmit={emailverify}>
        <label htmlFor="">Update Email</label>
        <input type="text" name="email" placeholder='Enter your Update Email' id="" />
        <button>submit</button>
      </form>
    </div>
  )
}

export default UpdateEmail
