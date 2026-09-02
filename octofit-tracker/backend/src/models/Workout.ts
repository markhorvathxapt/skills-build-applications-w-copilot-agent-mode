import mongoose from 'mongoose'

export interface WorkoutDocument extends mongoose.Document {
  title: string
  category: 'cardio' | 'strength' | 'mobility'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  durationMinutes: number
  description: string
}

const workoutSchema = new mongoose.Schema<WorkoutDocument>({
  title: { type: String, required: true },
  category: { type: String, enum: ['cardio', 'strength', 'mobility'], required: true },
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
  durationMinutes: { type: Number, required: true, min: 1 },
  description: { type: String, required: true },
})

export default mongoose.model<WorkoutDocument>('Workout', workoutSchema)
