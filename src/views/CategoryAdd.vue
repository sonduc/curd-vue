<template>
    <v-container
        fill-height
        fluid
        grid-list-xl
    >
        <v-layout
    
            wrap
        >
            <v-flex
                xs12
                md8
            >
                <material-card
                    color="green"
                    title="Form nhập thông tin"
                >
                    <v-form>
                        <v-container py-0>
                            <v-layout wrap>
                                <v-flex
                                    xs12
                                    md5
                                >
                                    <v-text-field
                                        class="purple-input"
                                        label="Tên danh mục"
                                        v-model="name"
                                    />
                                </v-flex>

                                <v-flex xs12 md5 />

                                <v-flex
                                    xs12
                                    md7
                                >
                                    <h5>Trạng thái</h5>
                                    <v-radio-group v-model="status" row>
                                        <v-radio label="Không nổi bật" :value=0 ></v-radio>
                                        <v-radio label="Nổi bật" :value=1 ></v-radio>
                                    </v-radio-group>
                                </v-flex>

                                <v-flex
                                    xs12
                                    text-xs-right
                                >
                                    <p></p>
                                    <v-btn
                                        class="mx-0 font-weight-light"
                                        color="success"
                                        @click="add"
                                    >
                                        Thêm mới
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data () {
            return {
                id:"",
                name:"",
                status: 0
            }
        },
        methods:{
            add: function(){
                this.$store.dispatch('addCategory', {
                    name: this.name,
                    status: this.status,
                });
                this.$router.push('/categories');
            },
        },
        computed: {
            ...mapState(['category']),
        }
    }
</script>

<style lang="scss" scoped>

</style>