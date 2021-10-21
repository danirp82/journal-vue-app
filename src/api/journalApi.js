import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://journal-vue-17277-default-rtdb.europe-west1.firebasedatabase.app'
})

export default journalApi