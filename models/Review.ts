import mongoose, { InferSchemaType, model, Schema, Document } from "mongoose";

const ReviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  animeId: {
    type: Schema.Types.ObjectId,
    ref: 'Anime'
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  review: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});


// Infer the TypeScript type from the schema
type Review = InferSchemaType<typeof ReviewSchema> & Document;

// Export the Mongoose model
export default mongoose.models.Review || model<Review>("Review", ReviewSchema);
