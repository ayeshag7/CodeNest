export const RecentPostsLink = () => {
  return (
    <>
        <div className="hidden mx-16 mb-1 md:flex gap-x-4 items-center">
            <h1 className="text-xl md:text-2xl text-notePink font-extrabold">Recent Posts</h1>
            <button className="text-notePink">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </button>
        </div>
        <div className="hidden md:block h-0.5 w-40 mx-16 mb-20 bg-gray-500"></div>
    </>
  )
};