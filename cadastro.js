function readCliente() {
    var clientes = localStorage.getItem('clientes');
    if (clientes) {
      return JSON.parse(clientes);
    } else {
      return [];
    }
  }

  // Função para salvar os clientes no armazenamento local
  function saveCliente(clientes) {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }

  // Função para adicionar um cliente na tabela
  function addClienteToTable(cliente) {
    var tableBody = document.getElementById('tableBody');

    var row = document.createElement('tr');
    row.innerHTML = `
      <td>${cliente.nome}</td>
      <td>${cliente.telefone}</td>
      <td>${cliente.email}</td>
      <td>${cliente.bairro}</td>
      <td>${cliente.cidade}</td>
      <td>
        <button class="btn btn-primary btn-edit" data-id="${cliente.id}">Editar</button>
        <button class="btn btn-danger btn-delete" data-id="${cliente.id}">Excluir</button>
      </td>
    `;

    tableBody.appendChild(row);
  }

  // Função para carregar os clientes na tabela
  function loadClientes() {
    var tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    var clientes = readCliente();

    clientes.forEach(function (cliente) {
      addClienteToTable(cliente);
    });
  }

  // Função para cadastrar um novo cliente
  function cadastrarCliente() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;

    var clientes = readCliente();

    var id = 1;
    if (clientes.length > 0) {
      id = clientes[clientes.length - 1].id + 1;
    }

    var cliente = {
      id: id,
      nome: nome,
      telefone: telefone,
      email: email,
      bairro: bairro,
      cidade: cidade
    };

    clientes.push(cliente);
    saveCliente(clientes);

    addClienteToTable(cliente);

    closeCadastroModal();
  }

  // Função para excluir um cliente
  function excluirCliente(id) {
    var clientes = readCliente();

    var index = clientes.findIndex(function (cliente) {
      return cliente.id === id;
    });

    if (index !== -1) {
      clientes.splice(index, 1);
      saveCliente(clientes);
      loadClientes();
    }
  }

  // Função para abrir o modal de cadastro
  function openCadastroModal() {
    var modal = document.getElementById('modal__modal');
    modal.style.display = 'block';
  }

  // Função para fechar o modal de cadastro
  function closeCadastroModal() {
    var modal = document.getElementById('modal__modal');
    modal.style.display = 'none';
    document.getElementById('form').reset();
  }

  // Função para editar um cliente
  function editarCliente(id) {
    var clientes = readCliente();

    var index = clientes.findIndex(function (cliente) {
      return cliente.id === id;
    });

    if (index !== -1) {
      var cliente = clientes[index];

      document.getElementById('nome').value = cliente.nome;
      document.getElementById('telefone').value = cliente.telefone;
      document.getElementById('email').value = cliente.email;
      document.getElementById('bairro').value = cliente.bairro;
      document.getElementById('cidade').value = cliente.cidade;

      openCadastroModal();

      document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        var nome = document.getElementById('nome').value;
        var telefone = document.getElementById('telefone').value;
        var email = document.getElementById('email').value;
        var bairro = document.getElementById('bairro').value;
        var cidade = document.getElementById('cidade').value;

        cliente.nome = nome;
        cliente.telefone = telefone;
        cliente.email = email;
        cliente.bairro = bairro;
        cliente.cidade = cidade;

        clientes[index] = cliente;
        saveCliente(clientes);

        loadClientes();
        closeCadastroModal();
      });
    }
  }

  document.getElementById('call__modal').addEventListener('click', openCadastroModal);
  document.getElementById('btn__close').addEventListener('click', closeCadastroModal);

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    cadastrarCliente();
  });

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-delete')) {
      var id = parseInt(event.target.getAttribute('data-id'));
      excluirCliente(id);
    }

    if (event.target.classList.contains('btn-edit')) {
      var id = parseInt(event.target.getAttribute('data-id'));
      editarCliente(id);
    }
  });

  loadClientes();

  // Adicionando o botão "Voltar para JOGOS"
  var jogosButton = document.createElement('button');
  jogosButton.innerHTML = 'Voltar para JOGOS';
  jogosButton.className = 'btn btn-primary';
  jogosButton.addEventListener('click', function () {
    window.location.href = 'jogos.html';
  });

  var buttonContainer = document.getElementsByClassName('button__container')[0];
  buttonContainer.appendChild(jogosButton);
