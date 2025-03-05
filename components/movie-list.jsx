import Image from "next/image"


const movies = [
    { id: 1, title: "Inception", rating: 8.8, imageUrl: "https://picsum.photos/300/450?random=1" },
    { id: 2, title: "The Shawshank Redemption", rating: 9.3, imageUrl: "https://picsum.photos/300/450?random=2" },
    { id: 3, title: "The Dark Knight", rating: 9.0, imageUrl: "https://picsum.photos/300/450?random=3" },
    { id: 4, title: "Pulp Fiction", rating: 8.9, imageUrl: "https://picsum.photos/300/450?random=4" },
    { id: 5, title: "Forrest Gump", rating: 8.8, imageUrl: "https://picsum.photos/300/450?random=5" },
    { id: 6, title: "The Matrix", rating: 8.7, imageUrl: "https://picsum.photos/300/450?random=6" },
    { id: 7, title: "Goodfellas", rating: 8.7, imageUrl: "https://picsum.photos/300/450?random=7" },
    { id: 8, title: "The Silence of the Lambs", rating: 8.6, imageUrl: "https://picsum.photos/300/450?random=8" },
]


export function MovieList() {

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie) => (
                <div key={movie.id} className="relative group overflow-hidden rounded-lg shadow-md bg-gray-200">
                    <div className="aspect-[2/3] relative">
                    <Image
                        src={movie.imageUrl || "/placeholder.svg"}
                        alt={movie.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h2 className="text-xl font-semibold text-white mb-2 line-clamp-2">{movie.title}</h2>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1 text-white">{movie.rating.toFixed(1)}</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
    )
}

