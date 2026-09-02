import mongoose from 'mongoose'

export interface ActivityDocument extends mongoose.Document {
  user: mongoose.Types.ObjectId
  type: 'running' | 'walking' | 'strength'
  durationMinutes: number
  points: number
  completedAt: Date
}

const activitySchema = new mongoose.Schema<ActivityDocument>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['running', 'walking', 'strength'], required: true },
  durationMinutes: { type: Number, required: true, min: 1 },
  points: { type: Number, required: true, min: 0 },
  completedAt: { type: Date, required: true },
})

export default mongoose.model<ActivityDocument>('Activity', activitySchema)
