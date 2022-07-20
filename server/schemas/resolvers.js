const { AuthenticationError } = require("apollo-server-express");
const User = require("../models/User");
const Wishlist = require("../models/Wishlist")
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
<<<<<<< HEAD
    user: async () => {
      return await User.findOne();
=======
    user: async (parent, args, context) => {
      return await User.findOne({ _id: context.user._id });
>>>>>>> f936962b92d72af57054eb6d62745443176d2647
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    addWishlist: async (parent, args, context) => {
      if (context.user) {
        try {
          const wishlist = await Wishlist.create(args);
          await User.findByIdAndUpdate(context.user._id, { $push: { wishlist: wishlist } }, {
            new: true,
          });
          return wishlist;
        }
        catch (error) {
          console.log(error)
          return error
        }
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
