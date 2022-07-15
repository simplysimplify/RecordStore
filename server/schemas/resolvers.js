const User = require("../models/User");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
  },
};

module.exports = resolvers;
