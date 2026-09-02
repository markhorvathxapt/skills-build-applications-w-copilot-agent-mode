import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

const activitiesUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

export default function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection(activitiesUrl).then(setActivities).catch((reason) => setError(reason.message)) }, [])
  return <ResourcePage eyebrow="Movement log" title="Activities" description="Every session counts. Keep an eye on the work you are putting in." error={error}>
    <div className="activity-list">{activities.map((activity) => <article className="activity-row" key={activity._id}><span className={`activity-icon ${activity.type}`}>{activity.type === 'running' ? 'R' : activity.type === 'walking' ? 'W' : 'S'}</span><div><strong>{activity.type}</strong><span>{activity.user?.name || 'Team member'} · {activity.durationMinutes} minutes</span></div><b>{activity.points} pts</b></article>)}</div>
  </ResourcePage>
}

function ResourcePage({ eyebrow, title, description, error, children }) { return <section className="resource-page"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{description}</p>{error ? <div className="alert alert-warning mt-4">{error}</div> : children}</section> }