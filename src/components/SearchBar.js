export const SearchBar = () => {
  return (
    <div>
        <form className="hidden md:flex mb-20 justify-center">
            <input type="text" placeholder="Search by a username, title, or keyword"
            className="w-in-w px-4 py-2.5 rounded-xl border border-gray-300 shadow-lg focus:outline-notePink"/>
        </form>
    </div>
  )
};
