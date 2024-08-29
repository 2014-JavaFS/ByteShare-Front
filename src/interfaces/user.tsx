interface User{
    userID:number
    email:string
    password:string
    username:string
    first_name:string
    last_name:string
    userType:userType
}

enum userType{
    ADMIN,
    AUTHOR,
    USER    
}