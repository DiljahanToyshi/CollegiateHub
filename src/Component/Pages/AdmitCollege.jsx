import { useContext,useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate, useParams } from 'react-router-dom';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AdmitCollege = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); 
  const { register, handleSubmit, reset } = useForm();
  const{user}= useContext(AuthContext);
const navigate = useNavigate()
  const { id } = useParams();
  
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        // return console.log( imgResponse)

        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, college, contactNumber, address,email } = data;
          const newItem = {
            name,
            college, contactNumber, address,email,image:imgURL
          };

          fetch('http://localhost:5000/enroll', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
              setIsFormSubmitted(true);

              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Enrolled successfully'
              })  
              reset();  navigate('/mycollege')     }
        })
        }
      });
  };

  return (
    <div className="w-full px-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Your Name*</span>
          </label>
          <input
defaultValue={user?.displayName} 
{...register("name")} readOnly
placeholder="your name"
type="name"
  className="input input-bordered focus:outline-blue-900 w-full "
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">College Name*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("college", { required: true })}
              className="select select-bordered focus:outline-blue-900">
              <option disabled>Pick One</option>
              <option>Acme University</option>
              <option>Zenith College</option>
              <option>Athena Institute</option>
              <option>Liberty College</option>
              <option>Innovate University</option>
              <option>Eagle University</option>
              <option>Harmony College</option>
              <option>Pinnacle Institute</option>
            </select>
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Contact No*</span>
            </label>
            <input
              type="number"
              {...register("contactNumber", { required: true })}
              placeholder="Type here"
              className="input input-bordered focus:outline-blue-900 w-full "
            />
          </div>
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Your Email*</span>
            </label>
            <input
defaultValue={user?.email} 
{...register("email")} readOnly
placeholder="your email"
type="email"
  className="input input-bordered focus:outline-blue-900 w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Your Address </span>
            </label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="address"
              className="input input-bordered focus:outline-blue-900 w-full "
            />
          </div>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text font-semibold">Your Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered focus:outline-blue-900 w-full "
          />
        </div>
        <input
          className="btn btn-sm mt-4 bg-blue-950 text-white"
          type="submit"
          value="Submit"
          disabled={isFormSubmitted}
        />
      </form>
    </div>
  );
};

export default AdmitCollege;
