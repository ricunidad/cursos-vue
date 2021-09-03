import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-5061b-default-rtdb.firebaseio.com'
}) 

export default journalApi