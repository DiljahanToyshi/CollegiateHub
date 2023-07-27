import "./SocialLoginBtn.css";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { GithubAuthProvider } from "firebase/auth";
import { useContext } from "react";


const SocialLogin = () => {
  const {signInWithPopup, auth,googleSignIn,setUser } =useContext(AuthContext)
  const githubProvider = new GithubAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
            fetch('https://collegiate-hub-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => { Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "User logged in successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                    navigate(from, { replace: true });
                })
        })
}

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then( result => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        setUser(loggedUser);
    })
    .catch(error => {
        console.log(error)
    })
}
  
  return (
    <div className=" social-button-container w-50 mt-3">
 <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >        <img
        
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div onClick={handleGithubSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
>
        <img
          className=" social-button  "
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLogin;