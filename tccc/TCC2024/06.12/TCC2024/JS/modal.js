const btn = document.querySelector("#btnAbrirModal")
const modal = document.querySelector("#modal")
const closeModalBtn = document.querySelector('#closeModalBtn');


btn.addEventListener('click',()=>{
  modal.showModal()
})

// closeModalBtn.addEventListener('click', () => {
//     modal.classList.remove('open');
//   });

closeModalBtn.addEventListener('click', () => {
    modal.close()
  });