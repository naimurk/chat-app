import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
    const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form?.name?.value;
    const email = form?.email?.value;
    const password = form?.password?.value;
    const photo = form?.photo?.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      await setDoc(doc(db, "users", user.uid), {
       photoURL: photo , name, uid: user.uid,email
      });

      await setDoc(doc (db , "userChat", user.uid),{})
      navigate("/")

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <form onSubmit={handleSubmit} className="flex flex-col bg-gray-300 p-12 gap-y-3">
        <input className="border" placeholder="name" type="text" name="name" id="" />
        <input className="border" placeholder="email" type="email" name="email" id="" />
        <input className="border" placeholder="password" type="password" name="password" id="" />
        <div className="w-1/3">
          <input className="border" type="url" placeholder="photo url" name="photo" id="" />
        </div>
        <input className="bg-red-400 px-5 py-2" type="submit" value="submit" />
      </form>
      <p>
        you have an account <Link className="text-blue-600" to={"/login"}>login</Link>
      </p>
    </div>
  );
};

export default Register;
