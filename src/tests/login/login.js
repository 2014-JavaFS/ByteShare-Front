import axios from 'axios'

//Used as Learning Aid
//https://runthatline.com/how-to-mock-axios-with-vitest/

const BASE_URL = "http://ec2-3-141-202-46.us-east-2.compute.amazonaws.com:8888"

export const fetchUsers = async () => {
  return (await axios.get(`${BASE_URL}/users`, {
    responseType:"json",
    headers: { 
        'userType': 'ADMIN'
      }
    })
  ).data
}
