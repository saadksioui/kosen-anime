import mongoose, { InferSchemaType, model, Schema, Document } from "mongoose";

// Define the Notification schema
const NotificationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['like', 'comment', 'reply', 'system'],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  isRead: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

// Infer the TypeScript type from the schema
type Notification = InferSchemaType<typeof NotificationSchema> & Document;

// Export the Mongoose model
export default mongoose.models.Notification || model<Notification>("Notification", NotificationSchema);
