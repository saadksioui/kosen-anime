import mongoose, { InferSchemaType, model, Schema, Document } from "mongoose";

const CommentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reviewId: {
    type: Schema.Types.ObjectId,
    ref: 'Review'
  },
  discussionId: {
    type: Schema.Types.ObjectId,
    ref: 'Discussion'
  },
  content: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true
});


// Infer the TypeScript type from the schema
type Comment = InferSchemaType<typeof CommentSchema> & Document;

// Export the Mongoose model
export default mongoose.models.Comment || model<Comment>("Comment", CommentSchema);
