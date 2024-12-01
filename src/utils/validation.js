export const validatePhone = (phone) => {
    const phoneRegex = /^\+?7([0-9]{10})$/;
    return phoneRegex.test(phone);
  };
  
  export const validateCard = (cardNumber) => {
    const cardRegex = /^[0-9]{16}$/;
    return cardRegex.test(cardNumber);
  };
  
  export const validateCVV = (cvv) => {
    const cvvRegex = /^[0-9]{3}$/;
    return cvvRegex.test(cvv);
  };
  
  export const validateExpiryDate = (date) => {
    const dateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    return dateRegex.test(date);
  };