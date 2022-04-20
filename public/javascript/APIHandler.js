class APIHandler {
    constructor() {
        this.BASE_URL = axios.create({
            baseURL: 'https://minions-api.herokuapp.com'
        })
    }

    getFullList() {
        return this.BASE_URL.get('/characters')
    }

    getOneRegister(characterId) {
        return this.BASE_URL.get(`/characters/${characterId}`)

    }

    createOneRegister(characterInfo) {
        return this.BASE_URL.post(`/characters`, characterInfo);

    }

    updateOneRegister(characterInfo) {

        return this.BASE_URL.put(`/characters/${characterInfo.id}`, characterInfo);

    }

    deleteOneRegister(characterId) {
        return this.BASE_URL.delete(`/characters/${characterId}`)

    }
}