<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'

const posts = ref([])


onBeforeMount(()=> {
    axios.get('https://dummyjson.com/posts?limit=20')
    .then(res=>{
        posts.value = res.data.posts
    })

});


function getSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-')
}

function LoadMore(){
    axios.get('https://dummyjson.com/posts?limit=20&skip=20')
    .then(res => {
        posts.value = [...posts.value, ...posts.value]
    })
}

</script>


<template>
    <section class="blog-area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-lg-4" v-for="post in posts" :key="post.id">
                    <div class="card">
                        <router-link :to="{name: 'post', params:{id: post.id} }"><img class="img-fluid" :src="`//source.unsplash.com/random/300x200?${post.id}`" alt="blog post"></router-link>
                        <div class="card-body">
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text">{{ post.body }}</p>
                            <router-link :to="{name: 'post', params:{id: post.id} }" class="btn btn-primary">Read more</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center" v-if="posts.length > 0">
                    <button @click="LoadMore()" type="button" class="btn btn-success">Load more</button>
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
    min-height: 60px;
    font-size: 20px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
}
.card-text {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
}


</style>