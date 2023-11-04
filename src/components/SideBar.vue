<script setup>


</script>


<template>

    <div class="left-sidebar">
        <ul>
            <li><router-link to="/">home</router-link></li>
            <li><router-link to="/about">about</router-link></li>
            <li><router-link to="/contact">contact</router-link></li>
            <li><router-link to="/blog">blog</router-link></li>
            <li><router-link to="/protected">Protected</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
        </ul>
    </div>


</template>


<style scoped>
    .left-sidebar {
        padding: 30px 0;
    }

    li a{
        display: block;
        font-size: 18px;
        line-height: 1.5;
        text-transform: capitalize;
        color: #222;
        padding: 10px;
        transition: all 0.3s ease;
    }
    li a:hover {
        color: #fff;
        background: #222;
        transition: all 0.3s ease;
    }
</style>