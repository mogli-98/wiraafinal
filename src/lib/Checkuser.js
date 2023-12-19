import Cookies from 'js-cookie';

const isUserLoggedIn = () => {
     const userToken = Cookies.get('accessToken');

     if (userToken) {

          return true;
     }

     return false;
};

// Example usage in a component:
if (isUserLoggedIn()) {
     // Render content for authenticated users
     window.location("/user/dashboard")
} else {
     // Render content for non-authenticated users
     window.location("/")
}
