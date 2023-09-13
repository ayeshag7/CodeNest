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
    const documentRef = doc(db, "Notes", id);
    await deleteDoc(documentRef);
    setToggle(!toggle)
  }

  return (
    <div className='flex flex-col gap-y-2 items-start p-4 postCardHeight w-72 md:w-96 bg-pink-50 border border-gray-500 shadow-lg rounded-lg'>
        <p className='text-lg text-gray-800 font-bold'>{title}</p>
        <p className='text-base text-left'>{description}</p>

        {/* Author's name and Date Created */}
        <div className='flex items-center gap-x-24 md:gap-x-32 mt-2 mb-2'>
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
        <div className="flex gap-x-4">
          <span onClick={handleDelete} className="text-notePink"><i className="bi bi-trash3"></i></span>
        </div>}
    </div>
  )
}
