function makeGreen(){
document.body.style.backgroundColor ="green";
}

const YellowButton = document.getElementById("make-yellow");
YellowButton.onclick=function MakeYellow(){
    document.body.style.backgroundColor="yellow";
} 

document.getElementById('make-seagreen').addEventListener('click',function(){
document.body.style.backgroundColor="seagreen";
})

document.getElementById('update-btn').addEventListener('click',function(){

const inputTextAncor=document.getElementById('input-box');
const inputText= inputTextAncor.value;
const Heading = document.getElementById('head-line');
Heading.innerText=inputText;
 
inputTextAncor.value='';
})

document.getElementById('btn-post').addEventListener('click',function(){
const newCommentId = document.getElementById('new-comment');
const newComment =newCommentId.value;


const commentContainer=document.getElementById('container');
const p=document.createElement('p');
p.innerText=newComment;
commentContainer.appendChild(p);

newCommentId.value='';
})


document.getElementById('delete-btn').addEventListener('click',function(){
const loveText=document.getElementById('love-text');
loveText.style.display="none";
})

document.getElementById('input-box-lorem').addEventListener('keyup',function(event){
               const text = event.target.value;


               const deleteButton =document.getElementById('btn-delete');
               if(text=='delete'){
                deleteButton.removeAttribute('disabled');
               }
               else {
                deleteButton.setAttribute('disabled',true);
               }

})
document.getElementById('btn-delete').addEventListener('click',function(){
    const text = document.getElementById('lorem-text');
    text.style.display = 'none';
})


document.getElementById('list-container').addEventListener('click',function(event){
event.target.parentNode.removeChild(event.target);
})
document.getElementById('add-btn').addEventListener('click',function(){
    const listContainer= document.getElementById('list-container');


    const li=document.createElement('li');
    li.innerText='I Love you too!!!!';
    listContainer.appendChild(li);
})