import {MovieList} from "@/components/movie-list"

export default async function Home() {
  // const movies = await getMovies()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Featured Movies</h2>
        <MovieList />
      </main>
    </div>
  )
}