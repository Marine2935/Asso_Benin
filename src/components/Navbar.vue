<template>
    <nav class="mt-4">
        <div class="container">
        <ul class="d-flex justify-content-between align-items-center m-0 p-0">
            <li>
                <router-link to="/" class="nav_link">ACCUEIL</router-link>
            </li>
            <li>
                <b-dropdown text="CONTEXTE" data-toggle="dropdown" block toggle-class="text-decoration-none" no-caret>
                    <b-dropdown-item>
                        <router-link to="/history">Histoire</router-link>
                    </b-dropdown-item>
                    <b-dropdown-item>
                        <router-link to="/situation">Situation</router-link>
                    </b-dropdown-item>
                </b-dropdown>
            </li>
            <li>
                <b-dropdown text="NOS ACTIONS" data-toggle="dropdown" block toggle-class="text-decoration-none" no-caret>
                    <b-dropdown-item :to="'/orphanage'">Orphelinat</b-dropdown-item>
                    <b-dropdown-item :to="'/schools'">Écoles</b-dropdown-item>
                    <b-dropdown-item :to="'/villages'">Villages</b-dropdown-item>
                    <b-dropdown-item :to="'/spirulina'">Spiruline</b-dropdown-item>            
                </b-dropdown>
            <li>
                <router-link to="/about" class="nav_link">QUI SOMMES-NOUS ?</router-link>
            </li>
            <li>
                <router-link to="/join" class="nav_link">ADHÉRER</router-link>
            </li>
        </ul>
        </div>
    </nav>
</template>

<style lang="scss">
nav {
    background-color: #D48A59;
}

li {
    list-style: none;
}

nav a, nav .btn {
    color: rgb(26, 14, 5) !important;
    font-weight: bold !important;

    &:hover {
        color: lighten(rgb(26, 14, 5), 10) !important;
    }
}

.btn {
    background-color: transparent !important;
    border: none !important;    
}

.nav_link, .btn {
    padding: 1.5rem 0.75rem !important;
}

.dropdown:hover .dropdown-menu {
    display: block;
}
</style>