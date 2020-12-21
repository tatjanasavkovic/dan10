function ispisProizvoda() {
    podaci.forEach((proizvod, index) => {
        $('#prodavnica').append(`
            <div class="col col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="panel panel-primary kartica">
                    <div class="panel-heading">
                        <h4>${proizvod.naziv}</h4>
                    </div>
                    <div class="panel-body text-center">
                        <img src="${proizvod.slika}" alt="" srcset="">
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col col-md-6">
                                <h4>${proizvod.cena}</h4>
                            </div>
                            <div class="col col-md-6">
                                <button class="btn btn-success dodaj-u-korpu" id="dugme${index}">
                                    <span class="glyphicon glyphicon-shopping-cart"></span>
                                    Dodaj u korpu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}
function ispisKorpe() {
    let korpa = JSON.parse(window.localStorage.korpa);
    $('#korpa-proizvodi').empty();
    korpa.forEach((proizvod, index) => {
        $('#korpa-proizvodi').append(`
            <tr>
                <td>${index + 1}</td>
                <td><img class="korpa-slika img-thumbnail" src="${proizvod.slika}"></td>
                <td>${proizvod.naziv}</td>
                <td>${proizvod.cena} RSD</td>
                <th>
                    <button onclick="brisanjeIzKorpe(this)" type="button" class="btn btn-danger" id="dugme-brisanje-${index}">
                        <span class="glyphicon glyphicon-trash"></span>
                    </button>
                </th>
            </tr>
        `);
    });
}
function kvantitetKorpe() {
    $("#kvantitetKorpa").html(JSON.parse(window.localStorage.korpa).length);
}
function brisanjeIzKorpe(e) {
    let index = e.id.substr(15);
    let korpa = JSON.parse(window.localStorage.korpa);
    korpa.splice(index, 1);
    window.localStorage.korpa = JSON.stringify(korpa);
    kvantitetKorpe();
    ispisKorpe();
}
$(document).ready(function () {
    if (window.localStorage.korpa == undefined) {
        window.localStorage.korpa = JSON.stringify([]);
    }

    ispisProizvoda();
    kvantitetKorpe();
    ispisKorpe();

    $(".dodaj-u-korpu").click(function () {
        let index = $(this).attr('id').substr(5);
        let korpa = JSON.parse(window.localStorage.korpa);
        korpa.push(podaci[index]);
        window.localStorage.korpa = JSON.stringify(korpa);
        console.log('====================================');
        console.log(window.localStorage.korpa);
        console.log('====================================');
        kvantitetKorpe();
        ispisKorpe();
    });

    $(".brisanje-iz-korpe").click();


});
