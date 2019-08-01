import axios from 'axios';
import { url_api } from '../utils/api';

export default {
    fetch({ commit }) {
        return axios.get(`${url_api}/categories`)
            .then(response => commit('FETCH', response.data))
            .catch();
    },
    fetchOne({ commit }, id) {
        axios.get(`${url_api}/categories/${id}`)
            .then(response => commit('FETCH_ONE', response.data))
            .catch();
    },
    deleteCategory({}, id) {
        axios.delete(`${url_api}/categories/${id}`)
            .then(() => this.dispatch('fetch'))
            .catch();
    },
    editCategory({}, category) {
        axios.put(`${url_api}/categories/${category.id}`, {
            name: category.name,
            status: category.status,
        })
            .then(() => this.dispatch('fetch'));
    },
    addCategory({}, category) {
        axios.post(`${url_api}/categories`, {
            name: category.name,
            status: category.status,
        })
            .then(() => this.dispatch('fetch'));
    }
}
