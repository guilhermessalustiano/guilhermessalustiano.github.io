// Funcoes
let modalCarregado = false;

async function carregarModal() {
    if (modalCarregado) return;

    const response = await fetch('modais.html');
    const html = await response.text();

    document.getElementById('modais-container').innerHTML = html;

    modalCarregado = true;
}


// Eventos
$(document).ready(function() {
    $(document).on('click', '.tech', async function(){
        await carregarModal();

        // Pega o id do modal
        const modalId = $(this).data('modal');

        // Abre o modal correspondente
        const modal = new bootstrap.Modal(
            document.getElementById(modalId)
        );

        modal.show();
    });
});

