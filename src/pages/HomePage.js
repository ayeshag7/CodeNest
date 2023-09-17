import { collection, getDocs } from "firebase/firestore";
import { HeroCard, SearchBar, PostCard, RecentPostsLink } from "../components";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { useToggle } from "../context/ToggleContext";

export const HomePage = () => {

  const {toggle} = useToggle();

  const [notes, setNotes] = useState([]);

  const collectionRef = collection(db, "Notes");

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        const notes = querySnapshot.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        }));
        notes.map((note) => {
          const timeStamp = note["createdAt"]
          note["createdAt"] = timeStamp.toDate().toLocaleString();
          return note
        });
        setNotes(notes);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };
    fetchDocs();
  }, [collectionRef, toggle])

  return (
    <main className="pt-16 pb-32 z-10">

      <HeroCard/>
      <SearchBar />

      <RecentPostsLink />
      
      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 z-10">
          {notes.map((note) => {
            return <PostCard key={note.id} note={note}/>
          })}
      </div>

    </main>
  )
};
