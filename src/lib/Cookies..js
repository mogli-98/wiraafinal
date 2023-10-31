import Cookies from 'js-cookie';

// After successful login
const loginUser = (accessToken) => {
  // Set a cookie with the name 'userToken' that expires in 7 days
  Cookies.set('accessToken', accessToken.token, { expires: 7 });
  // Additional logic for logging in the user
};