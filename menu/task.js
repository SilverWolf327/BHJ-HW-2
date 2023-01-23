const submenuLink = document.querySelectorAll('.menu_sub');
const menuLink = document.querySelector('.menu_main');
   
   let openedSubMenu;
   

   function menuOperate(){
     
      let elem = this.closest('li');

     openedSubMenu = menuLink.querySelector('.menu_active'); 
      
      if (openedSubMenu !== null) {
         openedSubMenu.classList.remove('menu_active');
      };
     
      if (openedSubMenu === null) {
         elem.querySelector('.menu_sub').classList.add('menu_active');
      };
        
      if ((openedSubMenu !== null) && (elem.querySelector('.menu_sub') !== openedSubMenu)) {
         openedSubMenu.classList.remove('menu_active');
         elem.querySelector('.menu_sub').classList.add('menu_active');
      };

     return false;     
   };

   for (let i = 0; i < submenuLink.length; i++) {          
      
      let closestElement = submenuLink[i].closest('li').querySelector('a.menu__link');
      
      closestElement.onclick = menuOperate;
   };