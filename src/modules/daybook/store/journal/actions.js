import journalApi from '../../../../api/journalApi'
export const loadEntries = async({commit}) => {
    const { data } = await journalApi.get('/entries.json')
    if ( !data ){
        commit('setEntries', [] )
        return
    }

    const entries = []
    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries )
}

export const updateEntry = async({commit}, entry) => {
    const { data, picture, text, id } = entry;
    const dataToSave = { data, picture, text }

    await journalApi.put(`entries/${id}.json`, dataToSave)
    commit('updateEntry', {...entry})
}

export const createEntry = async() => {

}