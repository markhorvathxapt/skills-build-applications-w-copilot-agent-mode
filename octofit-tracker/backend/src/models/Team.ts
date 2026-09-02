import mongoose from 'mongoose'

export interface TeamDocument extends mongoose.Document {
  name: string
  color: string
  members: mongoose.Types.ObjectId[]
}

const teamSchema = new mongoose.Schema<TeamDocument>({
  name: { type: String, required: true },
  color: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

export default mongoose.model<TeamDocument>('Team', teamSchema)
