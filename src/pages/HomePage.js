import { collection, onSnapshot } from "firebase/firestore";
import { HeroCard, SearchBar, PostCard, RecentPostsLink } from "../components";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

export const HomePage = () => {

  const [toggle, setToggle] = useState(false);

  const [notes, setNotes] = useState([]);

  const collectionRef = collection(db, "Notes");

  useEffect(() => {
    onSnapshot(collectionRef, (data) => {
      let movies = [];
      data.docs.forEach(document => {
        movies.push({...document.data(), id:document.id})
      })
      setNotes(movies)
    });
  }, [collectionRef, toggle])

  return (
    <main className="pt-16 pb-32 z-10">

      <HeroCard/>
      <SearchBar />

      <RecentPostsLink />
      
      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 z-10">
          {notes.map((note) => {
            return <PostCard key={note.id} note={note} toggle={toggle} setToggle={setToggle}/>
          })}
      </div>

    </main>
  )
};
