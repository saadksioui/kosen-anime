import mongoose, { InferSchemaType, model, Schema, Document } from "mongoose";

const AnimeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  synopsis: {
    type: String
  },
  genres: [
    {
      type: String
    }
  ],
  episodes: {
    type: Number
  },
  status: {
    type: String,
    enum: ['ongoing', 'completed'],
    default: 'ongoing'
  },
  releaseDate: {
    type: Date
  },
  studio: {
    type: String
  },
  averageRating: {
    type: Number,
    default: 0
  },
  ratingsCount: {
    type: Number,
    default: 0
  },
  coverImage: {
    type: String
  },
  trailerURL: {
    type: String
  }
}, {
  timestamps: true
});


// Infer the TypeScript type from the schema
type Anime = InferSchemaType<typeof AnimeSchema> & Document;

// Export the Mongoose model
export default mongoose.models.Anime || model<Anime>("Anime", AnimeSchema);
