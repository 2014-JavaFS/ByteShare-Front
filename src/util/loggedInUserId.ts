import parseJwt from "./jwtDecoder";
//Gives you Id for logged in user
export default function loggedInUserId():number{
    const jwt = localStorage.getItem("jwt")
    const decodedJwt = parseJwt(jwt)
    const id = decodedJwt.userId
    return id
}