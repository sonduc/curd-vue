// https://vuex.vuejs.org/en/mutations.html

export default {
    FETCH(state, categories) {
        state.categories = categories.data;
    },
    FETCH_ONE(state, category) {
        state.category = category.data;
    },
}
