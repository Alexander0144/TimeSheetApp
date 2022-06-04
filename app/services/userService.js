const User = require("../models/user");

class UserService {
  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error(error);
    }
  }
}
