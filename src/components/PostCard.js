import { auth } from "../firebase/firebaseConfig";
import { db } from "../firebase/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";


export const PostCard = ({note, toggle, setToggle}) => {
  
  const {title, description, createdAt, author} = note;
  const {name, imageURL, id} = author;
  const dateTime = createdAt.toDate().toLocaleString();
  const date_time = dateTime.split(",");

  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  async function handleDelete() {
    const documentRef = doc(db, "Notes", note.id);
    await deleteDoc(documentRef);
    setToggle(!toggle)
  }

  return (
    <div className='flex flex-col gap-y-2 items-start p-4 postCardHeight w-72 md:w-96 bg-pink-50 border border-gray-500 shadow-lg rounded-lg'>
        <p className='text-lg text-gray-800 font-bold'>{title}</p>
        <p className='text-base text-left'>{description}</p>

        {/* Author's name and Date Created */}
        <div className='flex items-center gap-x-24 md:gap-x-32 mt-2 mb-4'>
          <div className='flex items-center gap-x-2'>
            <div className="h-8 w-8 bg-white border border-black rounded-full">
                <img src={imageURL} alt="" 
                className="w-full h-full object-cover rounded-full"/>
            </div>
            <p className='text-left text-sm font-semibold text-gray-800'>{name}</p>
          </div>
          <p className='text-left text-gray-800 text-sm font-semibold'>{date_time[0]}</p>
        </div>

        {/* Delete and Edit button, only visible to the Author  */}
        { isLoggedIn && (id === auth.currentUser.uid) && 
        <div className="flex gap-x-4 items-center">
          <span onClick={handleDelete} className="text-notePink">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
          </span>
          <span className="text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </span>
        </div>}
    </div>
  )
}
