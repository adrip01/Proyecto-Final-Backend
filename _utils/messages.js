const errorMsg = {
  user: {
    CREATE: "Error creating user",
    UPDATE: "Error updating user",
    DELETE: "Error deleting user",
    GETALL: "Error retreiving all users",
    GETONE: "Error retreiving user",
    NOTFOUND: "User not found",
    PASSWORDLEN: "Password length can not be less than 8",
  },

  pagination: {
    SURPASS: "There is nothing here",
  },

  token: {
    NOTFOUND: "No authorization token was found",
    INVALID: "Invalid token",
  },

  authentication: {
    NOAUTH: "Don't have authorization",
    BADCREDENTIALS: "These credentials do not match our records",
    REQUIERED: "Email and Password are required",
    LOGINFAILED: "User login failed",
  },

  card: {
    NOAUTH: "Don't have authorization",
    REQUIERED: "User and type are required.",
    NOTFOUND: "Card not found",
    GETONE: "Error retreiving card",
  },
};

const successMsg = {
  user: {
    CREATE: "User created succsessfully",
    UPDATE: "User updated succsessfully",
    DELETE: "User deleted succsessfully",
  },
  card: {
    CREATE: "Card created succsessfully",
    UPDATE: "Card updated succsessfully",
    DELETE: "Card deleted succsessfully",
  },
};

module.exports = {
  successMsg,
  errorMsg,
};
