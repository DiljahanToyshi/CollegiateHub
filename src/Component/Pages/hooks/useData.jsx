import React, { useEffect, useState } from "react";

const useData = () =>{
    const [college,setCollege]= useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch('https://collegiate-hub-server.vercel.app/college')
        .then(res => res.json())
        .then(data => {
setCollege(data);
setLoading(false) })
    },[])
    return [college,loading]
}
export default useData;