$(document).ready(() => {
  //--------------------------------------------------------------------------
  //Form submit
  $("form").on("submit", (event) => {
    event.preventDefault();

    const nomeAtividade = $("#nova-atividade-input").val();

    console.log(nomeAtividade);

    const novaAtividadeTemplate = $(`
    <li id="nova-atividade" style="display: none" class="atividade" >${nomeAtividade}</li>
    `);

    $(novaAtividadeTemplate).appendTo(".atividades");
    $(novaAtividadeTemplate).fadeIn();
  });
  //--------------------------------------------------------------------------
  //Item click
  $(".atividades").on("click", "#nova-atividade", function (event) {
    $(event.target).toggleClass("strike");
  });
});
