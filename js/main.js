$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

  $("form").on("submit", function (e) {
    e.preventDefault();
    $("input").val("");
    $("#btn-enviar").text("ENVIADO");
    $("input").prop("disabled", true);
    $("input").each(function () {
      $(this).attr("placeholder", "");
    });
    $("#btn-enviar").css({
      "background-color": " #a7a7d5",
      color: "#121212",
      cursor: "default",
    });
  });
});
