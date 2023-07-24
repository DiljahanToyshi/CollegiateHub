import React, { useEffect, useState } from "react";

const useData = () =>{
    const [college,setCollege]= useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/college')
        .then(res => res.json())
        .then(data => {
setCollege(data);
setLoading(false) })
    },[])
    return [college,loading]
}
export default useData;