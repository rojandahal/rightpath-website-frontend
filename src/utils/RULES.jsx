export const RULES = {
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters'
    },
    maxLength: {
      value: 20,
      message: 'Password must be at most 20 characters'
    }
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: 'Please Enter Valid Email'
    }
  },
  contactNumber: {
    required: 'Contact number is required',
    minLength: {
      value: 10,
      message: 'Contact no must be 10 digit'
    },
    maxLength: {
      value: 10,
      message: 'Number must only be 10 digit'
    }
  }
}