import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
    userId: number;  // or string, depending on your data type
    sub: string;     // 'sub' is the email in your JWT
}

function parseJwt(token): CustomJwtPayload | null {
    try {
        return jwtDecode(token)
    } catch (error) {
        console.error("Invalid token:", error)
        return null;
    }
}

export default parseJwt