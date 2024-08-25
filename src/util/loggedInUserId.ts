import useLS from "../hooks/useLS";
import parseJwt from "./jwtDecoder";
//Gives you Id for logged in user
export default function loggedInUserId():number{
    const jwt = useLS("jwt",0);
    const decodedJwt = parseJwt(jwt)
    const id = decodedJwt.userId
    return id
}