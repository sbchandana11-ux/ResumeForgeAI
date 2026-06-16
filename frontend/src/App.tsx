function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">ResumeForge AI</h1>

        <div className="flex gap-4">
          <button className="text-gray-300 hover:text-white">
            Login
          </button>

          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-6xl font-bold max-w-4xl">
          Transform Your Resume With AI
        </h1>

        <p className="text-gray-400 text-xl mt-6 max-w-2xl">
          Get ATS scores, resume analysis, career insights,
          interview questions, and personalized improvement
          recommendations in seconds.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Upload Resume
          </button>

          <button className="border border-gray-700 px-6 py-3 rounded-xl">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;