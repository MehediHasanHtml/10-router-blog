<script setup>
import axios from 'axios'
import {useRoute } from 'vue-router'
import{ref, reactive, onBeforeMount} from 'vue'

const route = useRoute()
const id = route.params.id
const post = reactive({})
const comments = ref([])

onBeforeMount(()=> {
    axios.get(`https://dummyjson.com/posts/${id}`)
    .then(res =>{
        post.id = res.data.id
        post.title = res.data.title
        post.body = res.data.body
    })


    axios.get(`https://dummyjson.com/posts/${id}/comments`)
    .then(res => {
        comments.value = res.data.comments
    })


});


</script>


<template>    
<section class="blog-area">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <img class="img-fluid" :src="`//source.unsplash.com/random/300x200?${post.id}`" alt="blog post">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text">{{ post.body }}</p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="comments" v-if="comments.length > 0">
                    <h1>comments</h1>
                    <div class="d-flex" v-for="commnet in comments" :key="commnet.id">
                        <div class="flex-shrink-0">
                            <img src="..." alt="...">
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <h4>{{ commnet.user.username }}</h4>
                            <p>{{ commnet.body }}</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>


<style scoped>
h1 {
    font-size: 40px;
    line-height: 1.5;
    text-transform: capitalize;
}

.blog-area {
    padding: 30px 0;
}

.card img {
    width: 100%;
}

.card  {
    margin-bottom: 25px;
}

.btn  {
    margin: 15px 0;
}

.card-title {
    font-size: 20px;
    font-weight: 600;
}

</style>