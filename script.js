
function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imgModal");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}


function closeModal() {
  document.getElementById("modal").style.display = "none";
}

