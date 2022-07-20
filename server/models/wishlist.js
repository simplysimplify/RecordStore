const { Schema, model } = require("mongoose");

const wishlistSchema = new Schema({
	artist: {
    	type: String,
    	required: true,
		trim: true
	},
	album: {
    	type: String,
    	required: true,
		trim: true
	},
	release: {
    	type: String,
    	required: true,
		trim: true
	},
})

const Wishlist = model("Wishlist", wishlistSchema);

module.exports = Wishlist;