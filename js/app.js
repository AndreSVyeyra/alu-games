let jogoMonopoly = document.getElementById("game-1");
let jogoTicketToRice = document.getElementById("game-2");
let takenoko = document.getElementById("game-3");

function alterarStatus (numeroJogo){
    let jogo = document.getElementById(`game-${numeroJogo}`);
    let botao = document.querySelector("button"); 

    if (jogo.children.item(2).textContent === "Alugar") {
        jogo.children.item(2).textContent = "Devolver";
        jogo.children.item(2).classList.remove("dashboard__item__button");
        jogo.children.item(2).classList.add("dashboard__item__button--return");
        jogo.children.item(2).classList.add("dashboard__item__button");
        jogo.children.item(0).classList.add("dashboard__item__img--rented");
        

    }else {
        jogo.children.item(2).textContent = "Alugar";
        jogo.children.item(2).classList.remove("dashboard__item__button--return");
        jogo.children.item(2).classList.remove("dashboard__item__button");
        jogo.children.item(0).classList.remove("dashboard__item__img--rented");
        jogo.children.item(0).classList.add("dashboard__item__img");
        jogo.children.item(2).classList.add("dashboard__item__button");
        ConfirmacaoDevolucaoLivro();

    }

    function ConfirmacaoDevolucaoLivro () {
        let devolucao = prompt("Por favor confirme sua devolução digitando sim caso não tenha devolvido confirma com o não").toLowerCase();
        if(devolucao === "sim") {
             alert("Jogo: " + jogo.children.item(1).textContent +  " devolvido com sucesso");
        }else if ( devolucao != "sim") {
            alert("Jogo: "  + jogo.children.item(1).textContent + " ficara em status de uso até a sua confirmação de devolução")
            jogo.children.item(2).textContent = "Devolver";
            jogo.children.item(2).classList.remove("dashboard__item__button");
            jogo.children.item(2).classList.add("dashboard__item__button--return");
            jogo.children.item(2).classList.add("dashboard__item__button");
            jogo.children.item(0).classList.add("dashboard__item__img--rented");
        }
    }


    // function contagemJogosAlugado () {
    //     if (alterarStatus() === true) {
    //         console.log("livro alugado")
    //     }
    // }
    
}


