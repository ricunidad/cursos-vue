export function setEntries (state, entries) {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export function updateEntry (state, entry) {
    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[idx] = entry
}

export function addEntry ( state , entry) {
    state.entries = [entry, ...state.entries]
}

export function deleteEntry (state, id) {
    state.entries = state.entries.filter( entry => entry.id !== id )

}