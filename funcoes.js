// Funcoes
let modalCarregado = false;

async function carregarModal() {
    if (modalCarregado) return;

    const response = await fetch('modais_tecnologias/modal_html.html');
    const html = await response.text();

    document.getElementById('modais-container').innerHTML = html;

    modalCarregado = true;
}


// Eventos
$(document).ready(function() {
    $(document).on('click', '#tech-html', async function(){
        await carregarModal();

        const modal_html = new bootstrap.Modal(document.getElementById('modal_html'));
        modal_html.show();
    });
});

