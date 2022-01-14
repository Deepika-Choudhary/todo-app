console.log("Todo Page")

// add function 
function add(){
    console.log('button clicked')
    // document.getElementById("added").innerHTML += 'added';
    // document.getElementById("added").className += 'task';
    document.getElementById("added").classList.add('task');
    
}

function remove(){
    console.log('remove button clicked');
    document.getElementById("removed").classList.remove('task');
}

// delete function 