
// function for buttons
const buttons = document.querySelectorAll('.btn')
const storeItems = document.querySelectorAll('.store-item')

buttons.forEach(function(button){
   button.addEventListener('click', function(e){
       //prevent the default link jump to top of page
         e.preventDefault()
        
        //grab the filter button that was clicked
        const filter = e.target.dataset.filter
       
        if (filter === 'all'){
          
            //show all items
            storeItems.forEach(function(item){
                item.style.display = 'block'
           })
        } else if (filter === 'bmw'){
         storeItems.forEach(function(item){
               if (item.classList.contains('bmw')){
                   item.style.display = 'block'
                } else {
                   item.style.display = 'none'
                }
            })
        } else if (filter === 'toyota'){
            storeItems.forEach(function(item){
                if (item.classList.contains('toyota')){
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
               }
            })
      } else if (filter === 'volvo'){
           storeItems.forEach(function(item){
                if (item.classList.contains('volvo')){
                   item.style.display = 'block'
               } else {
                  item.style.display = 'none'
               }
           })
       } 
    })
})


$(document).ready(function(){
    $("#search-item").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".store-item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });