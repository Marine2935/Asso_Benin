<template>
    <div class="container mt-5">
        <h2 class="mb-5">Présentation du Bénin et localisation de Péréré</h2>
        <div class="d-flex justify-content-between align-items-center w-75 mx-auto mb-5">
            <img src="../assets/situation/map_01.jpg" alt="Carte du Bénin" class="map_01 me-5" />
            <p class="ms-5">Le Bénin, ancien Dahomey, est situé dans le golfe de Guinée. Il est entouré du Togo, du Burkina-Faso, du Niger et du Nigéria.
                Sa capitale politique est PORTO-NOVO, mais COTONOU demeure la plus grande ville (1.000.000 d’habitants) et reste la capitale commerciale.
                Ce petit pays, tout en hauteur, s’étend du golfe de Guinée au NIGER sur 700 Km. Entre le TOGO à l’ouest et le NIGERA à l’est, il fait seulement 125 Km de large le long de l’océan et 325 Km au niveau de TANGUIETA. Avec une surface 112 622 Km², sa population est d’environ 7.500.000 habitants.
                La croissance de la population était de 2,91% en 2002 (fertilité par femme : 6,14). L’espérance de vie pour un homme est de 48,8 ans et de 50,6 ans pour une femme.
                Classé 161 ème pays sur 177 sur l’indicateur du développement humain, le niveau économique est très bas, bien que le taux de croissance soit stable depuis 1999 (6,7% en 2003).
            </p>
        </div>
        <div class="d-flex justify-content-between align-items-center w-75 mx-auto">            
            <div class="me-5">
                <p>Péréré est situé dans le département du BORGOU, en bleu sur la carte, à 80 Km de piste au nord de PARAKOU, la plus grande ville du nord (120.000 habitants). 
                    C’est une région où la principale ressource est l’agriculture traditionnelle: ni ânes, ni bœufs, ni engins agricoles. Dans le village, on élève des porcs, des cabris, des moutons et de la volaille : poules, canards et pintades. L’élevage des bovins est réservé aux PEUHLS.
                </p>
                <p>Pour plus d'information, vous pouvez consulter le site du <a href="https://www.routard.com/guide/code_dest/benin.htm">Guide du Routard</a>.</p>
            </div>
            <img src="../assets/situation/map_03.jpg" alt="Carte du Bénin" class="map_02 ms-5" />
        </div>
        <div class="agri d-flex justify-content-center mt-5">
            <img src="../assets/situation/agri_01.jpg" alt="Agriculture" class="me-5" />
            <img src="../assets/situation/agri_02.jpg" alt="Agriculture" class="ms-5" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
a:hover {
    text-decoration: underline !important;
}

.map_01 {
    max-height: 400px;
}

.map_02, .agri img {
    max-height: 300px;
}
</style>