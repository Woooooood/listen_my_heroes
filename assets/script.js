window.onload = function () {

    var imgAll = document.querySelectorAll('img');
    var imgWoman = document.querySelectorAll('.imgWoman');
    var imgMan = document.querySelectorAll('.imgMan');
    var desc = document.querySelector('#description');
    var descPingu = document.querySelector('#pingu');
    var descPinga = document.querySelector('#pinga');
    var descWheatley = document.querySelector('#wheatley');
    var descEmi = document.querySelector('#emi');

    descPingu.onclick = function () {
        desc.style.display = 'inherit';
        desc.innerHTML = "Le meilleur pingouin du monde NOOT NOOT";
    };

    descPinga.onclick = function () {
        desc.style.display = 'inherit';
        desc.innerHTML = "La petite soeur du meilleur pingouin du monde qui fait NOOT NOOT, Malheuresement, elle ne le fait pas.";
    };

    descWheatley.onclick = function () {
        desc.style.display = 'inherit';
        desc.innerHTML = "Un gentil core de personnalité  qui aide notre héroine... Pendant un moment";
    };

    descEmi.onclick = function () {
        desc.style.display = 'inherit';
        desc.innerHTML = "Elle a pour mission de tuer le Seigneur des Ténèbres ! ... Mais elle doit gagner un peu d'argent d'abord.";
    };

    document.querySelector('#hide').onclick = function () {
            desc.style.display = 'none';
    };

    document.getElementById('showWomen').onclick = function () {
        for (var i = 0; i < imgWoman.length; i++) {
            imgWoman[i].style.visibility = 'visible';
        }
        for (var i = 0; i < imgMan.length; i++) {
            imgMan[i].style.visibility = 'hidden';
        }
    }
    document.getElementById('showMen').onclick = function () {
        for (var i = 0; i < imgMan.length; i++) {
            imgMan[i].style.visibility = 'visible';
        }
        for (var i = 0; i < imgWoman.length; i++) {
            imgWoman[i].style.visibility = 'hidden';
        }
    }
    document.getElementById('showAll').onclick = function () {
        for (var i = 0; i < imgMan.length; i++) {
            imgMan[i].style.visibility = 'visible';
        }
        for (var i = 0; i < imgWoman.length; i++) {
            imgWoman[i].style.visibility = 'visible';
        }
    }
}