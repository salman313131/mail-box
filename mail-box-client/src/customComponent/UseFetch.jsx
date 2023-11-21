import axios from "axios"
const useFetch= (url,method)=>{
    useEffect( async ()=>{
        try {
            const res = await axios({
                method,
                url
            })
            return res
        } catch (error) {
            console.log(error)
            return
        }
    },[url])
}
export default useFetch