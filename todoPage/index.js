console.log("Todo Page")

// add function 
function add(){
    // console.log('add button clicked')
    document.getElementById("added").innerHTML += `<div class="task">
        <input type="text" placeholder="New task...">
            <i class="fa fa-minus-circle fa-3x removeButton" aria-hidden="true" onclick="remove()"></i>
            <div id="removed"></div>
   
</div>`; 
    
}

// delete function
function remove(){
    // console.log('remove button clicked');
    var deleted = document.getElementsByClassName('removeButton');
    var i;
    for(i=0;i<deleted.length;i++){
        deleted[i].onclick = function(){
            var div = this.parentElement;
            div.style.display='none';
        }
    }
}

 
