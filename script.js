const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


    // function  buscarCep() {
    //     console.log('teste');
    //     var cep = this.value.replace(/\D/g, '');
    //     $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
    //         !dados.erro ? $('#cep').get(0).setCustomValidity('') : $('#cep').get(0).setCustomValidity('CEP não encontrado')
    //         $("#rua-cadastro").val(dados.logradouro);
    //         $("#rua-cadastro").trigger('focus');
    //         $("#bairro-cadastro").val(dados.bairro);
    //         $("#bairro-cadastro").trigger('focus');
    //         $("#cidade-cadastro").val(dados.localidade);
    //         $("#estado-cadastro").val(dados.uf);
    //         $("#numero-cadastro").focus();
    //         if (dados.localidade != undefined) {
    //             $("#cidade-cadastro").parent().addClass('active');
    //         }
    //         if (dados.uf != undefined) {
    //             $("#estado-cadastro").parent().addClass('active');
    //         }
    //     });
    // }