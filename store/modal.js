export const state = () => ({
    activeModal: null
})

export const mutations = {
    setActiveModal(state, payload) {
        state.activeModal = payload;
    },
    unsetActiveModal(state) {
        state.activeModal = null;
    }
}
