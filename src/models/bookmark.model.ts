import mongoose from 'mongoose';

const BookmarkSchema = new mongoose.Schema({
 userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
 postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
}, { timestamps: true });

export default mongoose.model('Bookmark', BookmarkSchema);