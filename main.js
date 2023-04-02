const form = document.getElementById('form-tarefas');
let linhas='';
form.addEventListener('submit', function(e){
    e.preventDefault();
document.getElementById('nome-tarefa');
let linha='<ul>';
linha += `<li>${inputNomeTarefa.value}</li>`;
linha += `</ul>`;

linhas += linha;
const corpoTabela = document.querySelector('lista');
corpoTabela.innerHTML = linhas
inputNomeTarefa.value='';
})
$(document).ready(function(){
$('cadastrar').on('click',function(){
    const nomeTarefa =
    $('#nomeTarefa').val()
    const li = document.createElement('li');
    li.innerHTML = ${nomeTarefa}
    $('ul').append(li)
    $('#nomeTarefa').val('')
    $('li').click(function(){
    $(li).addclass('feito')
    })
    
})
})