let divElem=document.createElement('div');

let val=localStorage.getItem('text');
let text;
if(val==null){
    text=document.createTextNode('Click to edit it');
}
else{
    text=document.createTextNode(val);
}

divElem.appendChild(text);
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border:2px solid black; width:180px; padding:25px;');


let container=document.querySelector('.container');
let first=document.getElementById('myfirst');

container.insertBefore(divElem,first);

divElem.addEventListener('click',function(){
    let notesLength=document.getElementsByClassName('text-area').length;
    if(notesLength==0){
    let html=elem.innerHTML;
    divElem.innerHTML=`<textarea class="form-control text-area" id="textarea" rows="3">${html}</textarea>`;
    }

    let textArea=document.getElementById('textarea');
    textArea.addEventListener('blur',function(){
        elem.innerHTML=textArea.value;
        localStorage.setItem('text',textArea.value);
    })
});

