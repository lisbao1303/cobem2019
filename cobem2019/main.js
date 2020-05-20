var t = $(document).width() + 17;
var texto = document.querySelector(".form-control");
var logo = document.querySelector(".logo");
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('#navp').toggleClass('active')
        $("#conteudo").toggleClass('active');
    })
    $('.conteudo').click(function () {
        var t = $(document).width() + 17;
        if (t <= 991) {
            if ($('#navp').hasClass("active")) {
                $('#navp').toggleClass('active');
                $("#conteudo").toggleClass('active');
            }
            if (texto.style.display == 'block') {
                texto.style.display = 'none';
                logo.style.display = 'block';
            }
        }
    })
})
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
function executar() {
    var texto = document.getElementById('texto').value;
    var lista = document.getElementById('historico');
    var adicionar = true;
    var opt = document.createElement('option');
    for (i = 0; i < lista.options.length; i++) {
        if (texto == lista.options[i].value) {
            adicionar = false;
        }
    }
    if (adicionar == true) {
        opt.value = texto;
        lista.appendChild(opt);
    }
}
$('#search').submit(function (e) {
    e.preventDefault();

    var textoBusca = $('#texto').val();
    $('#gsc-i-id1').val(textoBusca);
    $('td.gsc-search-button').find('button').trigger('click');
});

$('#bt-search').click(function () {
    if (t <= 991) {
        if (texto.style.display != 'block') {
            texto.style.display = 'block';
            logo.style.display = 'none';
        } else {
            var textoBusca = $('#texto').val();
            $('#gsc-i-id1').val(textoBusca);
            $('td.gsc-search-button').find('button').trigger('click');
        }
    } else {
        var textoBusca = $('#texto').val();
        $('#gsc-i-id1').val(textoBusca);
        $('td.gsc-search-button').find('button').trigger('click');
    }
})

$(document).ready(function () {

    var urlSearch = String(window.location);
    urlSearch = urlSearch.split('?');
    urlSearch = urlSearch[1].split('=');
    $('#texto').val(urlSearch[1]);
});
