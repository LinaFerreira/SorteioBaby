
function sortear(){
   
    let ncartela = document.getElementById("numeracao").value;
    let nsorteado = Math.round(Math.random() * ncartela);
    
         document.getElementById("e").innerHTML = 
         ` O número sorteado para o chá-rifa de ${document.getElementById ("n").value} 
         <h3 class="numeroSorteado" ><strong> foi ${nsorteado} ! </strong> 
         </h3>  O vencedor ganhou  <h3 class="vencedor"> ${document.getElementById("premio").value} </h3> 
         <br><br>  <a href="./index.html"class="novoSorteio"> Sortear Novamente </a> `;
        }

    

