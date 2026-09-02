import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

const usersUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export default function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection(usersUrl).then(setUsers).catch((reason) => setError(reason.message)) }, [])
  return <section className="resource-page"><p className="eyebrow">The OctoFit community</p><h1>People</h1><p className="lede">Meet the students and coaches making movement part of their day.</p>{error ? <div className="alert alert-warning mt-4">{error}</div> : <div className="people-list">{users.map((user) => <div className="person-row" key={user._id}><span className="avatar">{user.name.charAt(0)}</span><div><strong>{user.name}</strong><span>{user.role}</span></div><span className="person-email">{user.email}</span></div>)}</div>}</section>
}