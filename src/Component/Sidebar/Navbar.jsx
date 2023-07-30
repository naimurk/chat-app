import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        
        signOut(auth).then(() => {
            // Sign-out successful.
             navigate("/login")
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="flex justify-between p-3 text-white items-center bg-slate-600">
            <h2>name</h2>
            <div className="flex gap-x-3 items-center">
                <img src="" alt="" />
                <p>name</p>
                <button onClick={handleLogout} className="bg-purple-600 px-5 py-1">sign out</button>
            </div>
        </div>
    );
};

export default Navbar;