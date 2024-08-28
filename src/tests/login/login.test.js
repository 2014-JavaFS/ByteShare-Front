import { beforeEach, describe, expect, test, vi } from 'vitest'
import {LoggedInUserId} from '../../util/loggedInUserId'
import axios from 'axios'
import {postLogin} from '../../pages/login'
import {fetchUsers} from './login'


vi.mock('axios')

describe('Users Service', () => {
    beforeEach(() => {
      axios.get.mockReset()
    })


    describe('Login', () => {
        describe('fetchUsers', () => {
            test('Attempt Axios Request', async ()=>{
                //const usersMock = [{ id: 1 }, { id: 2 }]

                vi.spyOn(axios, 'get').mockReturnValue('Test')

                const users = await fetchUsers();
                
                expect(axios.get).toHaveBeenCalledWith('http://ec2-3-141-202-46.us-east-2.compute.amazonaws.com:8888/users',



                    "Object"+ '{\n'+
                    'responseType'+': \"json\",\n'+
                    'headers' + ': Object {\n'+
                    "\'userType\'" + ': \'ADMIN\',\n'+
                        '},\n'+
                        '},'
                )
            })
        })
    })
})        