import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../slices/UserSlice";

const UserList = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    // const user = [
    //     {id: 1, name: "Amanda", email: 'amanda@gmail.com'},
    //     {id: 2, name: "Nancy", email: 'nancy@gmail.com'},
    // ];

    const handleRemoveUser = (id) => {
        dispatch(deleteUser({id}));
    }

    const renderCard = () => user.map(user => (
        <div className="p-6 flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={user.id}>
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{user.email}</p>
            </div>
            
            <div className="flex gap-5">
                 {/* Edit button */}
                <Link to={`edit-user/${user.id}`}>
                    <button>
                        <MdEdit />
                    </button>
                </Link>

                {/* Delete button */}
                <button onClick={() => handleRemoveUser(user.id)}>
                    <MdOutlineDelete />
                </button>
            </div>
        </div>
        
    ))

  return (
    <div>
        <Link to="/add-user"><Button>ADD USER</Button></Link>
        <div className='grid gap-5 md:grid-cols-2'>
            {user.length ? renderCard() : <p className='text-center col-span-2 text-gray-500 font-semibold'>No User</p>}
        </div>
    </div>
    
  )
}

export default UserList
