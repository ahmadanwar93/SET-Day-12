var buttonAdd = document.getElementById("buttonAdd");
var listHolder = document.getElementById("list-holder-toDo");
var listHolderCompleted = document.getElementById("list-holder-completed");
var warningMessage = document.getElementById("warning-message");


let i = 1;

function addItem(){

    
    var toDoRow = document.createElement('div');
    var titleDiv = document.createElement('div');
    var counter = document.createElement('p');
    var deleteButton = document.createElement('BUTTON');

    if (buttonAdd.value == ""){
        console.log(buttonAdd.value);
        warningMessage.animate([{opacity:1},{opacity:1},{opacity:1},{opacity:0}],4000);
    }else{
        titleDiv.innerHTML = buttonAdd.value;
        counter.innerHTML = i;
        deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
        deleteButton.onclick = deleteTask;

        
        toDoRow.append(counter);
        toDoRow.append(titleDiv);
        titleDiv.classList.add("text-class");    
        toDoRow.append(deleteButton);
        toDoRow.classList.add("list-row");

        listHolder.append(toDoRow);
        buttonAdd.value = '';
        i += 1

    }

    
}


let j =1 ;
function deleteTask(){
    // console.log(this.parentNode.querySelectorAll('div'));
    // this.parentNode.remove();

    var textClassDiv = this.parentNode.children[1];
    var deleteButtonHolder = this.parentNode.children[2];

    // to apply strike through to the text
    console.log(this.parentNode.children[2]);
    textClassDiv.classList.add("strikeThroughText");
    textClassDiv.classList.add("list-rowCompleted");

    // remove the button so that user cannot add the completed task repeatedly into the completed task container
    this.parentNode.children[2].remove();



    var toDoRow = document.createElement('div');

    var titleDiv = document.createElement('div');
    titleDiv.innerHTML = textClassDiv.innerHTML;
    
    var counter = document.createElement('p');
    counter.innerHTML = j;


    toDoRow.append(counter);
    toDoRow.append(titleDiv);
    titleDiv.classList.add("text-class");    
    toDoRow.classList.add("list-row");

    listHolderCompleted.append(toDoRow);




    j += 1;
}


var sectionOneButton = document.getElementById("section-1-button");
var sectionTwoButton = document.getElementById("section-2-button");
var sectionThreeButton = document.getElementById("section-3-button");


sectionOneButton.addEventListener('dblclick', function(){
    // sectionOneButton.style.color = "red";
    
    // create input button
    var inputChangeText = document.createElement('input');
    sectionOneButton.append(inputChangeText);

    inputChangeText.addEventListener("keydown", enterPressed);
    function enterPressed(evt){
        if (evt.keyCode == 13){
            console.log("enter has been pressed");
            console.log(inputChangeText.value);
            sectionOneButton.innerHTML = inputChangeText.value;
        }
    }
    // console.log(inputChangeText.value);
    // 

})

sectionTwoButton.addEventListener('dblclick', function(){
    // sectionOneButton.style.color = "red";
    
    // create input button
    var inputChangeText = document.createElement('input');
    sectionTwoButton.append(inputChangeText);

    inputChangeText.addEventListener("keydown", enterPressed);
    function enterPressed(evt){
        if (evt.keyCode == 13){
            console.log("enter has been pressed");
            console.log(inputChangeText.value);
            sectionTwoButton.innerHTML = inputChangeText.value;
        }
    }
    // console.log(inputChangeText.value);
    // 

})

sectionThreeButton.addEventListener('dblclick', function(){
    // sectionOneButton.style.color = "red";
    
    // create input button
    var inputChangeText = document.createElement('input');
    sectionThreeButton.append(inputChangeText);

    inputChangeText.addEventListener("keydown", enterPressed);
    function enterPressed(evt){
        if (evt.keyCode == 13){
            console.log("enter has been pressed");
            console.log(inputChangeText.value);
            sectionThreeButton.innerHTML = inputChangeText.value;
        }
    }
    // console.log(inputChangeText.value);
    // 

})

// aku try bawah
buttonAdd.addEventListener("keydown", enterPressedInput);

function enterPressedInput(evt){
    console.log("haha enter");
    if (evt.keyCode == 13){
            addItem();
        }
}