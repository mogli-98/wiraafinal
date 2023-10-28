import React from 'react';
import Cookies from 'js-cookie';

function Cookie() {
  // Set a cookie
  Cookies.set('accessToken', 'yourAuthToken', { expires: 7 });

  // Get a cookie
  const userToken = Cookies.get('accessToken');

  // Delete a cookie
  Cookies.remove('accessToken');

  return (
    <div>
      <p>User Token: {userToken}</p>
    </div>
  );
}

export default Cookie;
