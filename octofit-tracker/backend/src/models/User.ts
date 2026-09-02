import mongoose from 'mongoose'

export interface UserDocument extends mongoose.Document {
  name: string
  email: string
  passwordHash: string
  role: 'student' | 'teacher'
}

const userSchema = new mongoose.Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher'], default: 'student' },
})

export default mongoose.model<UserDocument>('User', userSchema)
