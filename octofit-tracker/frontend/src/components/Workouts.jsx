import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

const workoutsUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

export default function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection(workoutsUrl).then(setWorkouts).catch((reason) => setError(reason.message)) }, [])
  return <section className="resource-page"><p className="eyebrow">Choose your challenge</p><h1>Workouts</h1><p className="lede">A few good options for wherever your energy is today.</p>{error ? <div className="alert alert-warning mt-4">{error}</div> : <div className="workout-grid">{workouts.map((workout) => <article className="workout-card" key={workout._id}><span className="workout-category">{workout.category}</span><h2>{workout.title}</h2><p>{workout.description}</p><footer><span>{workout.durationMinutes} min</span><span>{workout.difficulty}</span></footer></article>)}</div>}</section>
}