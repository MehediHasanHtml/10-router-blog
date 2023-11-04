<script setup>
const isAuthenticated = () => {
    return localStorage.getItem('token') == '123'
};


</script>


<template>
    <div>
        <h1>home page</h1>

        <div v-if="isAuthenticated()">
            <h2>Protected content</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dolorem ipsum repellat officiis amet. Distinctio amet recusandae quae sequi sunt repellat omnis fuga autem, eos ipsa alias ad, iste placeat.</p>
        </div>
    </div>
</template>


<style scoped>
h1 {
    font-size: 40px;
    line-height: 1.5;
    text-transform: capitalize;
}


</style>