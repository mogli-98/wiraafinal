import React from 'react'
import SettingModal from '../../modal/Setting.modal';
import { helper } from '../../lib/helper';

const UpdateEmail = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  console.log('Token:', token);
  const emailverify = () => {
    SettingModal.UpdateEmail({ token }).then((res) => {

         helper.sweetalert.toast("Your Email is Verifiyed")
         window.location.replace("/user/Settingd")
    }).catch((error) => {
         console.log(error);
    });

}
  return (
    <div>
      <h4>UPDATE EMAIL</h4>
      <form>
        <label htmlFor="">Update Email</label>
        <input type="text" name="email" placeholder='Enter your Update Email' id="" />
      </form>
    </div>
  )
}

export default UpdateEmail
