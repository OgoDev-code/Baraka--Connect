import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Baraka Connect
      </h1>
      <p className="text-gray-600 mb-6">Connecting Community Through Faith</p>
      
      <button 
        onClick={() => setCount((count) => count + 1)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        count is {count}
      </button>
    </div>
  )
}

export default App
