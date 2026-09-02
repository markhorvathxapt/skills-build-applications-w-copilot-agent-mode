import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

export default function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('leaderboard').then(setEntries).catch((reason) => setError(reason.message)) }, [])
  return <section className="resource-page"><p className="eyebrow">Friendly competition</p><h1>Leaderboard</h1><p className="lede">A little shared momentum goes a long way.</p>{error ? <div className="alert alert-warning mt-4">{error}</div> : <div className="leaderboard-list">{entries.map((entry) => <div className="leader-row" key={entry._id}><span className="rank">{String(entry.rank).padStart(2, '0')}</span><div><strong>{entry.user?.name || 'Team member'}</strong><span>{entry.team?.name || 'Independent'}</span></div><b>{entry.points} <small>PTS</small></b></div>)}</div>}</section>
}