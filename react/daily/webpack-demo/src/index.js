function component(){
    const element = createElement("div");

    element.innerHTML = _.join(['Hello','webpack'],'');

    return element;
}


document.body.appendChild(component());