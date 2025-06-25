// filepath: src/models/story.model.ts
import mongoose from 'mongoose';

const StorySchema = new mongoose.Schema({
 authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
 media: { type: String, required: true },
 viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
 createdAt: { type: Date, default: Date.now },
 expiresAt: { type: Date, required: true },
});

export default mongoose.model('Story', StorySchema);