const btn = document.querySelector("#btnAbrirModal")
const modal = document.querySelector("#modal")
const closeModalBtn = document.getElementById('#closeModalBtn');


btn.addEventListener('click',()=>{
  modal.showModal()
})
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('open');
  });
closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
  });