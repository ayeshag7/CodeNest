import { useState } from "react";
import { useToggle } from "../context/ToggleContext";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where, or } from "firebase/firestore";

export const SearchBar = () => {

  const { toggleState } = useToggle();

  const [searchVal, setSearchVal] = useState("");

  function handleChange(event) {
    setSearchVal(event.target.value)
  };

  async function fetchDocs(searchQ){
    const collectionRef = collection(db, "Notes")
    const queryRef = query(collectionRef,  where('title', '==', searchQ));
    try {
      // Fetch Documents
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    const searchQuery = searchVal;
    if (searchQuery !== "") {
      fetchDocs(searchQuery);
    }
  };
  
  return (
    <div>
        <form onSubmit={handleSubmit} className="hidden md:flex mb-20 justify-center">
            <input type="text" onChange={handleChange} value={searchVal} placeholder="Search by a username, title, or keyword"
            className="w-in-w px-4 py-2.5 rounded-xl border border-gray-300 shadow-lg focus:outline-notePink"/>
        </form>
    </div>
  )
};
