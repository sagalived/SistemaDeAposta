$(document).ready(function () {
  // Obtém o nome do usuário do armazenamento local e exibe-o
  var nomeUsuario = localStorage.getItem('nomeUsuario');
  $('#nomeUsuario').text('Bem-vindo, ' + nomeUsuario + '!');

  // Manipulador de clique do botão "Apostar"
  $('.btn-apostar').click(function () {
    var time1 = $(this).data('time1');
    var time2 = $(this).data('time2');
    var horario = $(this).data('horario');
    var local = $(this).data('local');
    var clienteSelecionado = '';

    // Define os valores no modal de confirmação de aposta
    $('#modalConfirmarApostaCliente').text('Cliente: ' + clienteSelecionado);
    $('#modalConfirmarApostaTime1').text('Time 1: ' + time1);
    $('#modalConfirmarApostaTime2').text('Time 2: ' + time2);
    $('#modalConfirmarApostaHorario').text('Horário: ' + horario);
    $('#modalConfirmarApostaLocal').text('Local: ' + local);

    // Exibe o modal de seleção do cliente
    $('#modalSelecionarCliente').modal('show');
  });

  // Manipulador de clique do botão "Confirmar Aposta"
  $('#btnConfirmarAposta').click(function () {
    var clienteSelecionado = $('#selectCliente').val();

    // Realiza a lógica para salvar a aposta do cliente

    // Exibe uma mensagem de sucesso
    alert('Aposta confirmada para o cliente ' + clienteSelecionado);

    // Fecha o modal de confirmação de aposta
    $('#modalConfirmarAposta').modal('hide');
  });

  // Manipulador de clique do botão "Selecionar Cliente"
  $('#btnSelecionarCliente').click(function () {
    var clienteSelecionado = $('#selectCliente').val();

    // Atualiza o valor no modal de confirmação de aposta
    $('#modalConfirmarApostaCliente').text('Cliente: ' + clienteSelecionado);

    // Fecha o modal de seleção do cliente
    $('#modalSelecionarCliente').modal('hide');

    // Exibe o modal de confirmação de aposta
    $('#modalConfirmarAposta').modal('show');
  });
});
