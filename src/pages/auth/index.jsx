import {auth , provider} from '../../config/firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate, Navigate} from "react-router-dom";
import {useGetUserInfo} from "../../hooks/useGetUserInfo"
import "./styles.css"

export const Auth = ()=>{
   const navigate  = useNavigate();
//    const {name,profilePhoto,userId,isAuth} = useGetUserInfo();

    const signInWithGoogle = async ()=>{
     const results = await signInWithPopup(auth,provider);
    //  console.log(results);
    const authInfo = {
        userId: results.user.uid,
        name:results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
    }
    localStorage.setItem("auth" , JSON.stringify(authInfo));
    navigate("/expense-tracker");  // useNavigate is hook , which is used here because whenever the user will be logged in , he will be redirected to the expense-tracker page
    }

    // if(isAuth){
    //     return <Navigate to="/expense-tracker" />
    // }

    return (
        <div className="login-page">
            <p>Sign In with Google to Continue</p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}