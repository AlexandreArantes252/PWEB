document.addEventListener('DOMContentLoaded', () => { //tive problemas de inplementação em algumas coisas
    const abrirPendenteButton = document.querySelector("#abrir-pendente");
    const abrirAndamentoButton = document.querySelector("#abrir-andamento");
    const abrirConcluidaButton = document.querySelector("#abrir-concluida");
    const fecharModalButton = document.querySelector("#fechar-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");
    const formTarefa = document.querySelector("#form-tarefa");
    const modalConfirmacao = document.querySelector("#modal-confirmacao");
    const cancelarExclusaoButton = document.querySelector("#cancelar-exclusao");
    const confirmarExclusaoButton = document.querySelector("#confirmar-exclusao");
    const closeIconExcluir = document.querySelector(".x-excluir");
    const closeIconExcluir2 = document.querySelector(".x");
    const limparButton = document.querySelector("#fechar-modal");
    const excluirPendentesButton = document.querySelector("#excluir-pendentes");
    const excluirAndamentoButton = document.querySelector("#excluir-andamento");
    const excluirConcluidaButton = document.querySelector("#excluir-concluida");
    const menuCabecalhoButton = document.querySelector(".menu-cabecalho"); 

    let tarefaAtual = null;

    const toggleModal = () => {
        modal.classList.toggle("hide");
        fade.classList.toggle("hide");
    };

    const showModalConfirmacao = () => {
        modalConfirmacao.classList.remove("hide");
    };

    const hideModalConfirmacao = () => {
        modalConfirmacao.classList.add("hide");
    };

    const verificarDataEStatus = (dataConclusao, status) => {
        const dataAtual = new Date();
        const dataConclusaoDate = new Date(dataConclusao);

        if (status === "concluida") {
            return "verde";
        } else if (dataConclusaoDate < dataAtual) {
            return "vermelho";
        } else {
            return "cinza";
        }
    };

    const atualizarTarefa = (tarefa) => {
        const tarefaElement = document.getElementById(tarefa.id);
        const corStatus = verificarDataEStatus(tarefa.dataVencimento, tarefa.status);
        tarefaElement.innerHTML = `
            <div class="status-indicator ${corStatus}"></div>
            <h2>${tarefa.titulo}</h2>
            <h3>${tarefa.descricao}</h3>
            <h3>Responsáveis: ${tarefa.responsaveis}</h3>
        `;

        const colunaAtual = tarefaElement.parentElement;
        const novaColuna = document.querySelector(`#${tarefa.status} .tarefas`);
        if (colunaAtual !== novaColuna) {
            novaColuna.appendChild(tarefaElement);
        }
    };

    abrirPendenteButton.addEventListener("click", () => {
        tarefaAtual = null;
        formTarefa.reset();
        limparButton.style.visibility = 'visible';
        toggleModal();
    });

    abrirAndamentoButton.addEventListener("click", () => {
        tarefaAtual = null;
        formTarefa.reset();
        limparButton.style.visibility = 'visible';
        toggleModal();
    });

    abrirConcluidaButton.addEventListener("click", () => {
        tarefaAtual = null;
        formTarefa.reset();
        limparButton.style.visibility = 'visible';
        toggleModal();
    });

    fecharModalButton.addEventListener("click", (event) => {
        event.preventDefault();
        toggleModal();
    });

    cancelarExclusaoButton.addEventListener("click", (event) => {
        event.preventDefault();
        hideModalConfirmacao();
    });

    closeIconExcluir.addEventListener("click", (event) => {
        event.preventDefault();
        hideModalConfirmacao();
    });

    closeIconExcluir2.addEventListener("click", (event) => {
        event.preventDefault();
        toggleModal();
    });

    confirmarExclusaoButton.addEventListener("click", (event) => {
        event.preventDefault();
        hideModalConfirmacao();
        formTarefa.reset();
    });

    limparButton.addEventListener("click", (event) => {
        event.preventDefault();
        showModalConfirmacao();
        toggleModal();
    });

    excluirPendentesButton.addEventListener("click", () => {
        excluirTarefasPorStatus("pendente");
    });

    excluirAndamentoButton.addEventListener("click", () => {
        excluirTarefasPorStatus("andamento");
    });

    excluirConcluidaButton.addEventListener("click", () => {
        excluirTarefasPorStatus("concluida");
    });

    menuCabecalhoButton.addEventListener("click", () => { // Preciso Ajustar apenas para abrir um de cada vez
        const excluirDiv = document.getElementById("excluir-pendentes");
        const excluirDiv2 = document.getElementById("excluir-andamento");
        const excluirDiv3 = document.getElementById("excluir-concluida");
        excluirDiv.style.display = excluirDiv.style.display === 'block' ? 'none' : 'block';
        excluirDiv2.style.display = excluirDiv2.style.display === 'block' ? 'none' : 'block';
        excluirDiv3.style.display = excluirDiv3.style.display === 'block' ? 'none' : 'block';
    });
    
    const excluirTarefasPorStatus = (status) => {
        const tarefas = document.querySelectorAll(`#${status} .tarefa`);
        tarefas.forEach(tarefa => tarefa.remove());
    };
    
    formTarefa.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(formTarefa);
        const tarefa = {
            id: tarefaAtual ? tarefaAtual.id : Date.now().toString(),
            titulo: formData.get("titulo"),
            descricao: formData.get("descricao"),
            prioridade: formData.get("prioridade"),
            dataVencimento: formData.get("data-vencimento"),
            responsaveis: formData.get("responsaveis"),
            status: formData.get("status")
        };
        
        if (tarefaAtual) {
            tarefaAtual.titulo = tarefa.titulo;
            tarefaAtual.descricao = tarefa.descricao;
            tarefaAtual.prioridade = tarefa.prioridade;
            tarefaAtual.dataVencimento = tarefa.dataVencimento;
            tarefaAtual.responsaveis = tarefa.responsaveis;
            tarefaAtual.status = tarefa.status;
            atualizarTarefa(tarefaAtual);
        } else {
            adicionarTarefa(tarefa);
        }
        toggleModal();
        formTarefa.reset();
    });

    const adicionarTarefa = (tarefa) => {
        const coluna = document.querySelector(`#${tarefa.status} .tarefas`);
        const corStatus = verificarDataEStatus(tarefa.dataVencimento, tarefa.status);
        const divTarefa = document.createElement("div");
        divTarefa.classList.add("tarefa");
        divTarefa.draggable = true;
        divTarefa.id = tarefa.id;

        divTarefa.style.width = '360px'; // ou outra medida apropriada

        divTarefa.innerHTML = `
            <div class="status-indicator ${corStatus}"></div>
            <h2>${tarefa.titulo}</h2>
            <h3>${tarefa.descricao}</h3>
            <h4>Responsáveis: ${tarefa.responsaveis}</h4>
        `;
        coluna.appendChild(divTarefa);

        divTarefa.addEventListener("dragstart", dragStart);
        divTarefa.addEventListener("dragend", dragEnd);
        divTarefa.addEventListener("click", () => editarTarefa(tarefa));
        salvarTarefaNoIndexedDB(tarefa);
    };

    const salvarTarefaNoIndexedDB = (tarefa) => {
        const request = indexedDB.open("GestorTarefas", 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const store = db.createObjectStore("tarefas", { keyPath: "id" });
            store.createIndex("status", "status", { unique: false });
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction("tarefas", "readwrite");
            const store = transaction.objectStore("tarefas");
            store.put(tarefa);
            transaction.oncomplete = () => {
                console.log("Tarefa salva no IndexedDB");
            };
        };

        request.onerror = (event) => {
            console.error("Erro ao salvar tarefa no IndexedDB", event.target.error);
        };
    };

    const dragStart = (event) => {
        event.dataTransfer.setData("text", event.target.id);
        setTimeout(() => {
            event.target.classList.add("hide");
        }, 0);
    };

    const dragEnd = (event) => {
        event.preventDefault();
        setTimeout(() => {
            event.target.classList.remove("hide");
        }, 0);
    };

    
    const atualizarStatusTarefa = (tarefa, novoStatus) => {
        tarefa.dataset.status = novoStatus;
        tarefa.status = novoStatus;
        const corStatus = verificarDataEStatus(tarefa.dataset.dataVencimento, novoStatus);
        tarefa.querySelector(".status-indicator").className = `status-indicator ${corStatus}`;
        if (tarefaAtual && tarefa.id === tarefaAtual.id) {
            tarefaAtual.status = novoStatus;
        }
    };
    
    const drop = (event) => {
        event.preventDefault();
        event.target.classList.remove("hovered");
        const id = event.dataTransfer.getData("text");
        const tarefa = document.getElementById(id);
        const novaColuna = event.target.closest('.corpo-retangulo').querySelector('.tarefas');
        const novoStatus = novaColuna.parentElement.id;
        tarefa.dataset.dataVencimento = novaColuna.parentElement.dataset.dataVencimento; 
        atualizarStatusTarefa(tarefa, novoStatus);
        novaColuna.appendChild(tarefa);
    };
    
    const recalcularCoresDeTodasAsTarefas = () => {
        document.querySelectorAll(".tarefa").forEach(tarefa => {
            const status = tarefa.dataset.status;
            const dataConclusao = tarefa.dataset.dataVencimento; 
            const corStatus = verificarDataEStatus(dataConclusao, status);
            tarefa.querySelector(".status-indicator").className = `status-indicator ${corStatus}`;
        });
    };



    const editarTarefa = (tarefa) => {
        tarefaAtual = tarefa;
        document.getElementById("titulo").value = tarefa.titulo;
        document.getElementById("descricao").value = tarefa.descricao;
        document.getElementById("prioridade").value = tarefa.prioridade;
        document.getElementById("data-vencimento").value = tarefa.dataVencimento;
        document.getElementById("responsaveis").value = tarefa.responsaveis;
        document.getElementById("status").value = tarefa.status;
        limparButton.style.visibility = 'hidden';
        toggleModal();
    };

    document.querySelectorAll(".corpo-retangulo").forEach(coluna => {
        coluna.addEventListener("dragover", (event) => {
            event.preventDefault();
            coluna.classList.add("hovered");
        });
        coluna.addEventListener("dragleave", (event) => {
            coluna.classList.remove("hovered");
        });
        coluna.addEventListener("drop", drop);
    });
});