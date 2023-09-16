import React from 'react';
import { db, auth } from "../firebase/firebaseConfig";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export const CreateNote = ({toggle, setToggle}) => {

  const navigate = useNavigate();
  const collectionRef = collection(db, "Notes");

  async function handleSubmit (event) {
    event.preventDefault();
    const noteData = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        imageURL: auth.currentUser.photoURL
      },
      createdAt: serverTimestamp()
    }
    await addDoc(collectionRef, noteData);
    setToggle(!toggle)
    navigate("/")
  }

  return (
    <main className='flex justify-center items-center py-12'>
      <div className='flex flex-col gap-y-12 justify-center items-center h-96 w-80 md:border border-gray-300 rounded-xl'>

        <form onSubmit={handleSubmit} className='flex flex-col gap-y-6'>
          <input type="text" name="title" placeholder='Title' maxLength="50" required className='border-2 border-gray-500 focus:outline-notePink rounded-xl px-4 py-2' />
          <textarea type="text" name="description" placeholder='Description' maxLength="600" required className='border-2 border-gray-500 focus:outline-notePink rounded-xl px-4 pt-2 pb-20' />
          <button type='submit' className='w-64 border text-white text-lg rounded-xl font-semibold hover:bg-pink-300 bg-notePink px-2 py-2'>
          Add Note
          </button>
        </form>
      </div>
    </main>
  )
}
