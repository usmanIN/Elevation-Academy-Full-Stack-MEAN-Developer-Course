let database = [];
var index = 1;
document.getElementById("addList").addEventListener("click",function(){
    document.getElementById("model").style.display = "block";    
});

document.getElementById("addItem").addEventListener("click",function(){
    let title = document.getElementById("Item").value;    
    if(title!=''){
        const object = {id:index, topic : title, sublist: [] };
        index+=1;
        database.push(object);
        document.getElementById("Item").value = "";
        createElement(object);
    }
    document.getElementById("model").style.display = "none";
});

function createElement(object){
    
    let card = document.createElement("div");
    card.setAttribute("class","card");      // build the div with .card classes
    let a = document.createElement("a");
    a.setAttribute("href","page.html?index"); // create element of anchor tags
    let h2 = document.createElement("h2");  // create element of h2 inside of a tags
    h2.innerText = object.topic;
    let cardContent = document.createElement("div");  // create element of div tag inside parent div tags
    cardContent.setAttribute("class","card-content");
    cardContent.appendChild(document.createElement("hr")); 

    let cardButton = document.createElement("div");
    cardButton.setAttribute("class","card-button");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    let addButton = document.createElement("button");
    addButton.setAttribute("onclick","addSublist("+object.id+")");
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
}


function addSublist(id){
    let listModel = document.getElementById("listModel");
    listModel.style.display = "block";     
    document.getElementById("addListItem").addEventListener("click",function(){        
        let item = document.getElementById("listItem").value;
        if(item!=''){                         
            database[id-1].sublist.push(item);
            let p = document.createElement("p");
            p.setAttribute("class","status");
            p.innerText = item;            
            let input = document.createElement("input");
            input.setAttribute("type","checkbox");
            p.appendChild(input);
            //element.parentElement.parentElement.appendChild(p);
            input.addEventListener("click",function(){
                if(p.style.textDecoration == 'line-through'){
                    p.style.textDecoration = 'none';
                }else{
                    p.style.textDecoration = 'line-through';
                }
            });
            console.log(database);
        }
    document.getElementById("listItem").value='';
    listModel.style.display = "none";
    
    });
}
