import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { name: 'Maya Chen', email: 'maya.chen@example.com', passwordHash: 'demo-hash-maya', role: 'student' },
      { name: 'Jordan Rivera', email: 'jordan.rivera@example.com', passwordHash: 'demo-hash-jordan', role: 'student' },
      { name: 'Avery Thompson', email: 'avery.thompson@example.com', passwordHash: 'demo-hash-avery', role: 'student' },
      { name: 'Paul Octo', email: 'paul.octo@example.com', passwordHash: 'demo-hash-paul', role: 'teacher' },
    ]);

    const teams = await Team.create([
      { name: 'Summit Striders', color: '#0d6efd', members: [users[0]._id, users[1]._id] },
      { name: 'Trailblazers', color: '#198754', members: [users[2]._id] },
    ]);

    await Activity.create([
      { user: users[0]._id, type: 'running', durationMinutes: 32, points: 64, completedAt: new Date('2026-08-28') },
      { user: users[1]._id, type: 'walking', durationMinutes: 45, points: 45, completedAt: new Date('2026-08-29') },
      { user: users[2]._id, type: 'strength', durationMinutes: 28, points: 56, completedAt: new Date('2026-08-30') },
    ]);

    await Leaderboard.create([
      { user: users[0]._id, team: teams[0]._id, points: 420, rank: 1 },
      { user: users[1]._id, team: teams[0]._id, points: 365, rank: 2 },
      { user: users[2]._id, team: teams[1]._id, points: 310, rank: 3 },
    ]);

    await Workout.create([
      { title: 'After-School Reset', category: 'mobility', difficulty: 'beginner', durationMinutes: 15, description: 'Gentle mobility sequence for hips, shoulders, and back.' },
      { title: 'Interval Builder', category: 'cardio', difficulty: 'intermediate', durationMinutes: 25, description: 'Alternating effort and recovery intervals to build endurance.' },
      { title: 'Full-Body Circuit', category: 'strength', difficulty: 'advanced', durationMinutes: 35, description: 'A balanced circuit using bodyweight strength movements.' },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
