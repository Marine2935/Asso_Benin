<template>
    <div class="container mt-5">
        <h2 class="mb-4">Qui sommes-nous ?</h2>
        <div class="about w-75 mx-auto">
            <p>L’histoire de l’association a commencée en <span class="fw-bold">juillet 2003</span>.</p>
            <p>Jacqueline GUIBERT qui était nouvellement retraitée, a cherché comment être encore utile après sa carrière professionnelle. Sa disponibilité lui permettait de réaliser enfin un vieux rêve : venir en aide aux pays défavorisés.</p>
            <h5>Mais de quelle manière ?</h5>
            <p>Elle a déposé son C.V. auprès d’une association nationale ; AGIR abcd ce qui signifie : Association Générale des Intervenants Retraités, Aide Bénévole pour la Coopération et le Développement.</p>
            <p>Son expérience dans la recherche médicale, n’était pas directement applicable aux besoins du tiers-monde, mais quand AGIR lui a demandé si elle acceptait de partir pour le Bénin, afin de former un laborantin aux analyses médicales, elle n'a pas hésité. Pour actualiser ses connaissances, elle a demandé à faire un stage chez un ami, dans son laboratoire d’analyses, mais avec les méthodes anciennes, avec le minimum de matériel.</p>
            <h5>Face à la réalité :</h5>
            <p>Jacqueline n’était pas préparée à affronter la misère, le dénuement, la mort des enfants. Elle le raconte dans son livre <br><span class="fw-bold">« Mon cœur resté à Péréré ».</span></p>
            <p>Après 2 mois ½ de mission, Paul son mari est allé la chercher, et en seulement 12 jours passés au Bénin, il a compris quelles difficultés Jacqueline avait rencontrées.</p>
            <h5>Retour en France :</h5>
            <p>Le travail accompli, Jacqueline ne pensait pas revoir ce pays, <br>mais on ne revient pas indemne.</p>
            <p class="fw-bold">Il n’était pas possible de ne rien faire pour ce pays, pour Péréré, pour l’orphelinat.</p>
        </div>
        <hr class="w-50 mx-auto my-4">
        <div class="row story d-flex flex-wrap">
            <div class="col-lg-6">
                <img src="../assets/about/about_01.jpg" alt="Photo de Jacqueline dans le laboratoire" />
                <p>Transmettre son savoir à ceux qui n'ont pas eu la chance de faire de bonnes études, n'est-ce pas un bon moyen de se sentir utile? Mais les conditions sont difficiles, le matériel réduit. 2 mois ½ suffiront cependant à former le technicien Jonas.</p>
            </div>
            <div class="col-lg-6">
                <img src="../assets/about/about_02.jpg" alt="Photo d'enfants du village" />
                <p>À 2 ans les orphelins retournent dans leur famille. Ici, des jumeaux retrouvent leur père qui donnera à la religieuse un coq pour la remercier !</p>
            </div>
            <div class="col-lg-6">
                <img src="../assets/about/about_03.jpg" alt="Photo de mise en culture de la spiruline" />
                <p>En 2008, le projet  pour la culture de la spiruline démarre. À partir de quelques litres que nous mettons en culture, il nous faudra remplir 3000 litres par bassin ! </p>
            </div>
            <div class="col-lg-6">
                <img src="../assets/about/about_04.jpg" alt="Photo d'enfants du village" />
                <p>Les enfants sont heureux de venir à nous surtout pour faire la photo. Mais ils ne parlent pas tous le français, même s'ils vont à l'école !</p>
            </div>
            <div class="col-lg-6">
                <img src="../assets/about/about_05.jpg" alt="Photo des villageois" />
                <p>Quand nous visitons les écoles, nous sommes l'attraction, car il y a peu de "batourés" (blancs) à part les religieux.</p>
            </div>
            <div class="col-lg-6">
                <img src="../assets/about/about_06.jpg" alt="Photo avec les orphelins" />
                <p>Après quelques jours les orphelins d'abord craintifs viennent se blottir contre nous. Ici, Paul est avec Nion, Allassan et Baké.</p>
            </div>
            <div class="col-lg-6">
                <img src="../assets/about/about_07.jpg" alt="Photo de construction de bassin" />
                <p>La construction des bassins pour la spiruline fut le travail de Paul, aidé par du personnel local.</p>
            </div>
            <div class="col-lg-6">
                <img src="../assets/about/about_08.jpg" alt="Photo dans le laboratoire" />
                <p>Les formules chimiques pour le milieu de croissance de la spiruline sont étudiées attentivement.</p>
            </div>
            <div class="col-lg-6">
                <img src="../assets/about/about_09.jpg" alt="Photo de Jacqueline et Paul devant les bassins" />
                <p>60 enfants peuvent bénéficier des bienfaits de la spiruline, grâce aux 2 bassins en service depuis février 2008. 2 autres bassins ont été construits en 2009.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about p {
    text-align-last: center;
}

.story {
    & div {
        display: flex;
        margin: 20px 0;
        justify-content: space-between;
    }

    & p {
        max-width: 50%;
    }

    & img {
        max-height: 200px;
        box-shadow: 2px 2px 3px grey;
    }
}
</style>