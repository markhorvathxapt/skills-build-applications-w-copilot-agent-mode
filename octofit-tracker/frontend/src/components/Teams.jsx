import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

export default function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('teams').then(setTeams).catch((reason) => setError(reason.message)) }, [])
  return <section className="resource-page"><p className="eyebrow">Find your people</p><h1>Teams</h1><p className="lede">Progress feels better when you do it together.</p>{error ? <div className="alert alert-warning mt-4">{error}</div> : <div className="team-grid">{teams.map((team) => <article className="team-card" key={team._id}><span className="team-dot" style={{ backgroundColor: team.color }} /><strong>{team.name}</strong><span>{team.members?.length || 0} members</span><div className="member-dots">{team.members?.map((member) => <i key={member._id}>{member.name?.charAt(0)}</i>)}</div></article>)}</div>}</section>
}