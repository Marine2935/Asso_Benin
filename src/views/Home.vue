<template>
    <div>
        <div class="welcome py-5 shadow">
            <h2 class="mb-4">Bienvenue sur le site de l'association</h2>
            <p>Découvrez les besoins de ce pays d'Afrique, le travail que nous avons réalisé, et celui qui reste à faire.</p>
            <p>Notre but est d'aider les enfants, qui sont l'avenir de ce pays, en favorisant leur développement physique et intellectuel.</p>
            <p>Nous luttons contre la malnutrition, nous aidons les familles par la formation à l'hygiène et à l'éducation en stimulant les animateurs locaux.</p>
            <p>Notre souhait : c'est qu'un jour ils n'aient plus besoin de nous !</p>
            <p class="h5 fw-bold">Nous avons besoin de votre aide morale et financière, n'hésitez pas à nous écrire.</p>
        </div>
        <div class="presentation mt-5">
            <h3>Présentation de Bana</h3>
            <p class="my-4 w-75 mx-auto">Bana est une petite orpheline, qui a été élevée à l’orphelinat de Péréré au Bénin, jusqu’à ses 2 ans. Aujourd’hui, elle est retournée dans son village, distant de quelques kilomètres, et vit chez sa grand-mère.
                Nous avons emprunté son nom comme symbole de tous les enfants qui ont besoin de votre aide pour bien grandir dans ce pays, parmi les plus pauvres, où les traditions règlent la vie (ou la mort) quotidiennement.
            </p>            
            <img src="../assets/bana_01.jpg" alt="Photo de Bana, orpheline du Bénin" title="Bana, orpheline du Bénin" class="shadow" />
            <p class="w-75 mt-4 mb-0 mx-auto"> Elle est le symbole des enfants de l'orphelinat, de Péréré et du Bénin.
                Sa maman est décédée à sa naissance, et comme les autres femmes ne nourrissent pas un autre enfant que le leur (elles pensent que cela lui porterait malheur), il ne reste plus que l'orphelinat pour les recueillir.
                Lorsqu'ils atteignent l'âge de 2 ans, ils peuvent repartir dans la famille; ils seront alors élevés par une grand-mère, une tante, ou la grande soeur...
            </p>
            <hr class="w-50 mx-auto my-5">
            <div class="d-flex justify-content-around w-75 mx-auto">
                <img src="../assets/bana_02.jpg" alt="Photo de Bana" title="Bana, orpheline du Bénin" class="home_img shadow" />
                <div class="w-50">
                    <h4 class="mb-4">"Mon cœur resté à Péréré"</h4>
                    <p> En octobre 2003, Bana va avoir 2 ans. Elle s'est prise d'amitié pour Jacqueline, la "batouré" (c'est à dire la blanche), qui est venue pour former un laborantin aux analyses médicales.
                        Elle quitte le groupe des autres orphelins pour lui faire un calin.
                    </p>
                    <p>
                        <a>Voir la suite dans le livre "Mon cœur resté à Péréré" de Jacqueline Guibert.</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.welcome {
    background: url('../assets/paper.jpg') no-repeat;

    & p {
        text-align: center;
    }
}

.home_img {
    max-height: 300px;
}

a:hover {
    text-decoration: underline !important;
}
</style>