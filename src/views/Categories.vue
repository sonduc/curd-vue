<template>
    <v-container 
        fill-height 
        fluid 
        grid-list-xl
    >
            <v-layout justify-center wrap>
                
                <v-flex
                    md12
                >
                    <router-link to="/category/add">
                        <v-btn color="info" >Thêm mới</v-btn>
                    </router-link>
                    <!-- <v-data-table
                        v-if="categories != undefined"
                        :headers="headers"
                        :items="categories"
                        hide-actions
                    >
                        <template
                            slot-scope="{ header }"
                        >
                        <span
                            class="subheading font-weight-light text-success text--darken-3"
                            v-text="header.text"
                        />
                        </template>
                        <template
                            slot="{categories}"
                            slot-scope="{item}"
                        >
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.status }}</td>
                            <td >
                                <v-icon
                                    small
                                    class="mr-2"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    small
                                >
                                    mdi-close
                                </v-icon>
                            </td>
                        </template>
                    </v-data-table> -->
                    <table class="tableCustom">
                        <thead>
                            <tr class="titleLine">
                                <th class="title">ID</th>
                                <th class="title">Danh mục</th>
                                <th class="title">Trạng thái</th>
                                <th class="title">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="category in categories" :key="category.id" class="dataTable">
                                <td class="textRow">
                                    {{ category.id }}
                                </td>
                                <td class="textRow">
                                    {{ category.name }}
                                </td>
                                <td class="textRow">
                                    {{ (category.status === 1) ? 'Nổi bật' : 'Không nổi bật' }}
                                </td>
                                <td class="textRow">
                                    <router-link :to="{ name: 'EditCategory', params: { id: category.id }}">
                                        <v-icon
                                            small
                                            class="mr-2"
                                        >
                                            mdi-pencil
                                        </v-icon>
                                    </router-link>

                                    <v-icon
                                        small
                                        @click="deleteCategory(category.id)"
                                    >
                                        mdi-close
                                    </v-icon>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </v-flex>
            </v-layout>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['categories']),
    },
    created: function () {
        this.$store.dispatch('fetch');
    },
    methods: {
        deleteCategory : function(id) {
            if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
                this.$store.dispatch('deleteCategory',id);
            }
        }
        
    },
    data() {
        return {
            headers: [
                { text: 'STT', value: 'id', sortable: false },
                { text: 'Danh mục', value: 'name', sortable: false },
                { text: 'Trạng thái', value: 'status', sortable: false },
                { text: 'Hành động', value: '', sortable: false },
            ],
        };
    }
};
</script>

<style lang="scss" scoped>
    .tableCustom{
        clear: both;
        margin-top: 6px !important;
        margin-bottom: 6px !important;
        max-width: none !important;
        border-collapse: separate !important;
        border: 1px solid #eceeef;
        background-color: #fff;
    }
    .titleLine{
        line-height: 1.5;
    }
    .title{
        width: 266px;
        padding-right: 30px;
        border-left-width: 0;
        color: #333;
        font-weight: normal;
        font-size: 0.9rem !important;
        border: 1px solid #eceeef;
        padding: 0.75rem;
        text-align: left;
    }
    .dataTable{
        background-color: rgba(0, 0, 0, 0.12);
        color: #595959;
    }
    .textRow{
        border-bottom-width: 0;
        font-size: 0.9rem;
        border: 1px solid #eceeef;
        padding: 0.75rem;
        vertical-align: top;
        color: #595959;
    }
</style>
