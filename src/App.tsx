import Navbar from './components/navbar.tsx';

function App() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to My Website!</h1>
        <p className="mt-2 text-gray-700">This is a simple React and Tailwind CSS setup with TypeScript.</p>
      </main>
    </>
  )
}

export default App
