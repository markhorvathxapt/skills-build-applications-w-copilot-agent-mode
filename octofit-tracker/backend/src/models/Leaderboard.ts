import mongoose from 'mongoose'

export interface LeaderboardDocument extends mongoose.Document {
  user: mongoose.Types.ObjectId
  team: mongoose.Types.ObjectId
  points: number
  rank: number
}

const leaderboardSchema = new mongoose.Schema<LeaderboardDocument>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  points: { type: Number, required: true, min: 0 },
  rank: { type: Number, required: true, min: 1 },
})

export default mongoose.model<LeaderboardDocument>('Leaderboard', leaderboardSchema)
