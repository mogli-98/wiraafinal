import React from 'react'
import { Link } from 'react-router-dom'

export default function Desktoploginfooter() {


  return (
    <>

      <div style={{ color: 'grey', fontSize: '16px' }} className='mt-3 p-2 d-none d-sm-block'>
        <Link to='/About Us'  >
          <span style={{ paddingRight: '10px', color: 'grey' }}>
            About </span>
        </Link>
        <Link to='/Career' target='blank'>
          <span style={{ paddingRight: '10px', color: 'grey' }}>Career</span>
        </Link>
        <Link to='/ContactComponent'>
          <span style={{ paddingRight: '10px', color: 'grey' }}>Conatct</span>
        </Link>
        

        <br />

     
{/* 
        <span style={{ paddingRight: '10px' }}>FAQ</span>

        <span style={{ paddingRight: '10px' }}>Blog</span> */}
        <Link to='/Termsandcondition'>
          <span style={{ color: 'grey' }}>Term of services</span>
        </Link>
        <Link to='/PrivacyPolicy'>
          <span style={{ paddingRight: '10px', color: 'grey' }}>Privacy policy</span>
        </Link>

        <span> ©️ 2023 Wiraa. All Rights Reserved</span>
      </div>

    </>
  )
}
