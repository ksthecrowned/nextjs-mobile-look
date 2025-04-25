
export default function Home() {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-4 min-h-screen">
      <div
        className="w-full max-w-[375px] bg-white rounded-lg shadow-lg overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* Header avec logo et navigation */}
        <header className="p-4 bg-blue-600 text-white rounded-t-lg">
          <h1 className="text-center text-xl font-bold">Mon Application Mobile</h1>
        </header>

        {/* Contenu Principal */}
        <main className="p-4 flex-grow">
          <h2 className="text-center text-lg mb-4">Bienvenue sur mon app</h2>
          <p className="text-center">Profite de cette interface comme une app mobile.</p>
          <div className="mt-4 flex justify-center">
            <div className="h-screen w-full" />
          </div>
        </main>

        {/* Footer avec liens */}
        <footer className="p-4 bg-gray-200 text-center text-sm rounded-b-lg">
          <p>© 2025 Mon App. Tous droits réservés.</p>
        </footer>
      </div>
    </div>
  );
}