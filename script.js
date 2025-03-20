document.getElementById("refresh-btn").addEventListener("click", function() {
    let iframe = document.getElementById("powerbi-frame");
    
    // Adiciona um efeito de animação ao botão
    this.style.transform = "scale(0.9)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 150);

    // Recarrega o Power BI sem atualizar a página
    iframe.src = iframe.src;
});
