$(document).ready(function() {
	$('header button').click(function() { //Forma de escrever uma ação do jQuerty
        $('form').slideDown();  //Função que vai fazer o formulário aparecer na página
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); //Função que vai fazer o formulário sair da página
    })

    $('form').on('submit', function(e) { //Outra forma de escrever uma ação do jQuerty é com o .on
        e.preventDefault(); //Evitando o compartamento padrão do formulário
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); // O .val é para capturar o valor no jQuerty. No JS é .value
        const novoItem = $('<li style="display: none"></li>'); //Criando um novo item no fim da linha quando o user adicionar uma nova imagem e usando o stile para adicionar o efeito da img surgir na tela
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem) //A sequencia de infs a ser criada é a mesma do html e vem entre CRASES e não aspas
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); //adiciona um efeito de entrada no novo item e o valor dentro do parentesis corresponde ao tempo de fade, que no caso está em 1s
        $('#endereco-imagem-nova').val(''); //Limpando o endereço digitado depois de adicionado com o .val('')
    })

})