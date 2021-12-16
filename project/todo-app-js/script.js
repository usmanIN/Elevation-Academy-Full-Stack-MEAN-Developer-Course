let database = [];
document.getElementById("addList").addEventListener("click",function(){
    document.getElementById("model").style.display = "block";    
});


document.getElementById("addItem").addEventListener("click",function(){
    let item = document.getElementById("Item").value;    
    if(item!=''){
        var object = Object({ list : item });
        database.push(object);
        document.getElementById("Item").value = "";
        createElement(item);
    }
    document.getElementById("model").style.display = "none";
});



document.getElementById("addListItem").addEventListener("click",function(){
    let item = document.getElementById("listItem").value;    
    if(item!=''){
               
        let p = document.createElement("p");
        p.setAttribute("class","status");
        p.innerText = "Task 1";
        
        let input = document.createElement("input");
        input.setAttribute("type","checkbox");
        p.appendChild(input);

        

        input.addEventListener("click",function(){
            if(p.style.textDecoration == 'line-through'){
                p.style.textDecoration = 'none';
            }else{
                p.style.textDecoration = 'line-through';
            }
        });


    }
    document.getElementById("listModel").style.display = "none";
});


function createElement(item){

    let card = document.createElement("div");
    card.setAttribute("class","card");      // build the div with .card classes
    let a = document.createElement("a");
    a.setAttribute("href","page.html?index"); // create element of anchor tags
    let h2 = document.createElement("h2");  // create element of h2 inside of a tags
    h2.innerText = item;
    let cardContent = document.createElement("div");  // create element of div tag inside parent div tags
    cardContent.setAttribute("class","card-content");
    cardContent.appendChild(document.createElement("hr")); 


    let cardButton = document.createElement("div");
    cardButton.setAttribute("class","card-button");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    let addButton = document.createElement("button");
    addButton.setAttribute("id","addButton");
    addButton.innerText = "Add";

    cardButton.appendChild(deleteButton);
    cardButton.appendChild(addButton);

    a.appendChild(h2);
    card.appendChild(a);
    card.appendChild(cardContent);
    card.appendChild(cardButton);    
    document.getElementsByClassName("container")[0].appendChild(card);  


    deleteButton.addEventListener("click",function(){
        card.remove();
    });


    addButton.addEventListener("click",function(){
        document.getElementById("listModel").style.display = "block";             
    });




}
   

