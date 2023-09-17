import { auth } from "../firebase/firebaseConfig";
import { db } from "../firebase/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../context/ToggleContext";

export const PostCard = ({ note }) => {

  const { toggleState } = useToggle();

  const navigate = useNavigate();
  
  const {title, description, createdAt, author} = note;
  const {name, imageURL, id} = author;
  const date_time = createdAt.split(",");

  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  async function handleDelete() {
    const documentRef = doc(db, "Notes", note.id);
    await deleteDoc(documentRef);
    toggleState();
  }

  function handleEdit() {
    navigate("/edit", { state: { note } });
  }

  return (
    <div className='flex flex-col gap-y-2 items-start px-6 py-4 postCardHeight w-72 md:w-96 bg-lighterPink border border-lightNotePink shadow-lg rounded-lg'>
        <p className='text-lg text-gray-700 font-bold'>{title}</p>
        <p className='text-base text-left'>{description}</p>

        {/* Author's name and Date Created */}
        <div className='flex flex-col md:items-center gap-y-4 md:flex-row mt-2 mb-4'>
          <div className='flex items-center gap-x-2 md:pr-14'>
            <div className="h-8 w-8 bg-white border border-black rounded-full">
                <img src={imageURL} alt="profile" 
                className="w-full h-full object-cover rounded-full"/>
            </div>
            <p className='text-left text-sm font-semibold text-gray-700'>{name}</p>
          </div>
          <p className='text-left text-gray-700 text-xs font-semibold md:pl-14'>{date_time[0]}</p>
        </div>
        
        {/* Delete and Edit button, only visible to the Author  */}
        { isLoggedIn && (id === auth.currentUser.uid) && 
        <div className="flex gap-x-4 items-center">
          <button onClick={handleDelete} className="text-notePink hover:scale-150 transform transition-transform duration-400 ease-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
          </button>
          <button onClick={handleEdit} className="text-gray-700 hover:scale-150 transform transition-transform duration-400 ease-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
          </button>
        </div>}
        
    </div>
  )
}
