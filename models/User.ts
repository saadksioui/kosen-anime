import mongoose, { InferSchemaType, model, Schema, Document } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  profilePicture: {
    type: String
  },
  favorites: {
    anime: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Anime'
      }
    ],
  },
  watchlist: [
    {
      animeId: {
        type: Schema.Types.ObjectId,
        ref: 'Anime'
      },
      status: {
        type: String,
        enum: ['watching', 'completed', 'on-hold'],
        default: 'watching'
      }
    }
  ],
}, {
  timestamps: true
});


// Infer the TypeScript type from the schema
type User = InferSchemaType<typeof UserSchema> & Document;

// Export the Mongoose model
export default mongoose.models.User || model<User>("User", UserSchema);