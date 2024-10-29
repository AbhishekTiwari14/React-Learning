import {useState, useEffect} from "react"

const useApi = (userId) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://myuser.api/:${userId}`)
        .then((res) => res.json)
        .then((info) => setData(info));
    }, [])
    return data;
}

export default useApi;