<script setup>

function authenticate (){
    localStorage.setItem('token', '123');
}

function logout() {
    localStorage.setItem('token', 'abc');
}


</script>


<template>
    <div>
        <h1>Login page</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci consequatur, at sint minima, nisi earum ab cumque, laborum ipsam quam. Voluptatum necessitatibus nisi consectetur laudantium fugit molestias voluptatem repellendus.
        </p>

        <button @click="authenticate()" type="button" class="btn btn-primary"> authenticate</button>
        <button @click="logout()" type="button" class="btn btn-secondary">Log out</button>
    </div>
</template>


<style scoped>
h1 {
    font-size: 40px;
    line-height: 1.5;
    text-transform: capitalize;
}


</style>