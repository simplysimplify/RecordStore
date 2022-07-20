
const mongoose = require('mongoose');

const { Schema } = mongoose;

const wishlistSchema = new Schema({
	artist: {
    	type: String,
    	required: true,
		trim: true
	},
	title: {
    	type: String,
    	required: true,
		trim: true
	},
	release: {
    	type: String,
    	required: true,
		trim: true
	},
	website: {
		type: String,
		required: true,
		trim: true
	}
})

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;