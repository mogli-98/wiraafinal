import Swal from "sweetalert2";

export const helper = {
  sweetalert: { toast, confirm,toast1 },
  capitalizeLetter,
  generateRandomStrings,
  validateContactNumber
};

export function toast(title, text = "", icon = "success") {
  Swal.fire({
    title: title,
    text:text,
    icon: icon,
    toast: true,
    timerProgressBar: false,
    showConfirmButton: false,
    position: 'top-end',
    timer: 5000,
    heightAuto: 'false',
    height: '100px'
  });
}

export function toast1(title, text = "", icon = "warning") {
  Swal.fire({
    title: title,
    text:text,
    icon: icon,
    toast: true,
    timerProgressBar: false,
    showConfirmButton: false,
    position: 'top-end',
    timer: 3000,
    heightAuto: 'false',
    height: '100px'
  });
}

export function confirm(title, text, icon = "success",  cancelButton = false, confirmButtonText = 'Yes, delete it!') {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: confirmButtonText,
    showConfirmButton: true,
    showCancelButton: cancelButton,
    cancelButtonColor: '#d33',
    confirmButtonColor: '#3085d6',
  });
}

export function capitalizeLetter(string) {
  if (string !== "") {
    const words = string.split(" ");
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedString = capitalizedWords.join(" ");
    return capitalizedString;
  } else {
    return string;
  }
}


export function generateRandomStrings(length = 10) {
  let randomString = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    const randomChar = chars.charAt(randomIndex);
    randomString += randomChar;
  }
  return randomString;
}

export function validateContactNumber (contactNo){
  const indianPhoneNumberRegex = /^(\+91|0)?[789]\d{9}$/;
  return indianPhoneNumberRegex.test(contactNo);
}

export function validateEmail (email){
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}