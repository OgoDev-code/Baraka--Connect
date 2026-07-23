import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
import Login from './Login'

function Dashboard({ user, onLogout }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-purple-600">Welcome to Baraka Connect</h1>
        <p className="mb-4">Logged in as: <b>{user.email}</b></p>
        <button 
          onClick={onLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
          Log Out
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const { data: { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>
  }

  return session ? <Dashboard user={session.user} onLogout={handleLogout} /> : <Login />
}
