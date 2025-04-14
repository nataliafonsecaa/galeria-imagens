
function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imgModal");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}


function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.documentElement.style.scrollbarWidth = "none";
document.documentElement.style.overflowY = "scroll";


document.addEventListener('DOMContentLoaded', function() {
  const btnTopo = document.getElementById('btnTopo');
  const margemFinal = 100; // Margem para considerar "final da página"
  

  
  // Verifica a posição de rolagem
  window.addEventListener('scroll', function() {
    // Altura total do documento
    const alturaTotal = document.body.scrollHeight;
    // Posição atual de rolagem + altura da janela
    const posicaoAtual = window.innerHeight + window.pageYOffset;
    
    // Mostra o botão se estiver perto do final
    if (posicaoAtual >= alturaTotal - margemFinal) {
      btnTopo.classList.add('visivel');
    } else {
      btnTopo.classList.remove('visivel');
    }
  });

  // Rolagem suave ao topo
  btnTopo.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


