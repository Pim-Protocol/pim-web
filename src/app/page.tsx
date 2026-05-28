export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 p-8">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-5xl font-bold text-orange-600">
          Pim Protocol
        </h1>

        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <button className="rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700">
            Get Started
          </button>
          <button className="rounded-lg border-2 border-orange-600 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-100">
            Move On
          </button>
        </div>
      </div>
    </main>
  );
}
