const SIGN_UP = {
  FORM: {
    NOT_VALID: 'Please check the content of the form'
  },
  FIRST_NAME: {
    NULL: 'The First Name is required',
    NO_VALID: 'The First Name entered is not valid',
    MAX_LENGTH: 'The First Name cannot contain plus of 30 characters'
  },
  EMAIL: {
    NOT_VALID: 'The Email is not valid'
  },
  PASSWORD: {
    NOT_EQUAL: 'Passwords must be the same'
  }
};
const SIGN_IN = {
  FORM: {
    NOT_EMAIL_AND_NICKNAME : 'Email or Nickname is required for login'
  },
  EMAIL: {
    NOT_VALID: 'The Email is not valid'
  }
};
export const ERROR_MESSAGE = {SIGN_UP, SIGN_IN};
