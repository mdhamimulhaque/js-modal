const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modalBg = document.querySelector(".modal-bg");

// ======== modal open =============
openBtn.addEventListener("click",()=>{
    modalBg.classList.add('active');
});

// ======== close from close Button =============
closeBtn.addEventListener("click",()=>{
    closeModal();
});

// ======== close from outside (modal background) =============
modalBg.addEventListener("click",(e)=>{
    if(e.target !== modalBg){
       return;
    }
    closeModal();
});

// ======== close from keyboard (esc key) =============
document.addEventListener("keydown",(e)=>{
  if( e.key === 'Escape'){
    closeModal();
  }
});


// =========== function for common work ===========
const closeModal = () =>{
    modalBg.classList.remove('active');
}