import mongoose, { InferSchemaType, model, Schema, Document } from "mongoose";

const CollectionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      itemId: {
        type: Schema.Types.ObjectId,
        required: true
      },
      itemType: {
        type: String,
        enum: ['Anime'],
        required: true
      },
      addedAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  visibility: {
    type: String,
    enum: ['public', 'private'],
    default: 'private'
  }
}, {
  timestamps: true
});


// Infer the TypeScript type from the schema
type Collection = InferSchemaType<typeof CollectionSchema> & Document;

// Export the Mongoose model
export default mongoose.models.Collection || model<Collection>("Collection", CollectionSchema);