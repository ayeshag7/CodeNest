import { useLocation } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from 'react-router-dom';
import { serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { useState } from "react";
import { useToggle } from "../context/ToggleContext";

export const EditPage = () => {
    const location = useLocation();
    const { note } = location.state || {};

    const { toggleState } = useToggle();

    const [titleVal, setTitleVal] = useState(note.title);
    const [descVal, setDescVal] = useState(note.description);

    function handleTitleChange(event) {
      setTitleVal(event.target.value)
    }

    function handleDescChange(event) {
      setDescVal(event.target.value)
    }

    const navigate = useNavigate();
    
    const documentReference = doc(db, "Notes", note.id);

    async function handleSubmit (event) {
        event.preventDefault();
        const noteData = {
          title: titleVal,
          description: descVal,
          updatedAt: serverTimestamp()
        }
        try {
            await updateDoc(documentReference, noteData);
            toggleState();
            navigate("/");
        } catch (error) {
            console.error("Error updating document: ", error);
        }
        navigate("/")
      }

  return (
    <main className="flex justify-center pt-12 pb-20">
        <div className='flex flex-col gap-y-12 justify-center items-center h-96 w-72 md:w-editW bg-lighterPink md:border border-lightNotePink shadow-lg rounded-lg'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-6'>
          <input type="text" name="title" onChange={handleTitleChange} value={titleVal} placeholder='Title' maxLength="50" required className='border-2 border-gray-500 focus:outline-notePink rounded-lg px-4 md:pl-4 md:pr-44 py-2' />
          <textarea type="text" name="description" onChange={handleDescChange} value={descVal} placeholder='Description' maxLength="600" required className='border-2 border-gray-500 focus:outline-notePink rounded-xl px-4 pt-2 pb-20' />
          <button type='submit' className='w-64 border text-white text-lg rounded-xl font-semibold bg-notePink hover:scale-105 transform transition-transform duration-400 ease-out px-2 py-2'>
          Update Note
          </button>
        </form>
      </div>
    </main>
  )
}
;