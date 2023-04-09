$(document).ready(function () {
$('form').on('submit', function (e) {
    e.preventDefault ();

    const nomeTarefa =$('#nome-da-tarefa').val ();
    const novaTarefa = $('<li></li>');
    $(`<li> ${nomeTarefa}</li>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');
    $('li').click(function (){
        $("this").addClass("riscado");
    });
    $('#nome-da-tarefa').val("");
        
    });
});