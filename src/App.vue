<template>
    <div id="app">
        <Header />
        <Navbar />
        <router-view/>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
    components: {
        Header,
        Navbar,
        Footer
    }
}
</script>

<style lang="scss">
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #351d12;
}

p {
    text-align: justify;
}

a {
    cursor: pointer;
    text-decoration: none!important;   
    color: #351d12 !important; 

    &:hover {
        color: lighten(#351d12, 10) !important;
    }
}

img {
    border-radius: 2%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
