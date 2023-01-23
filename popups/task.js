const modals = document.querySelectorAll('.modal');
const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");

modalMain.classList.add("modal_active");


function operateModal(event) {
    
    elem = event.target;
    
    if (elem.classList.contains("modal__close_times")) {
        modalMain.classList.remove("modal_active");
        modalSuccess.classList.remove("modal_active");
    };

    if (elem.classList.contains("show-success")) {
        modalMain.classList.remove("modal_active");
        modalSuccess.classList.add("modal_active");
    };
               
};


for (let i = 0; i < modals.length; i++) {
    modals[i].onclick = operateModal;
};
