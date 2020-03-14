const submit = document.querySelector('#submit');
let imgURL = document.querySelector('#imgURL');
let topText = document.querySelector('#topText');
let bottomText = document.querySelector('#bottomText');
let memeZone = document.querySelector('.memeOutput');
let whiteFont = document.querySelector('#white');
let sizes = document.querySelectorAll('.sizeChoices input');

memeZone.addEventListener("click", function(e){
    console.log(e);
    if(e.target.classList.contains('close')){
        // console.log(e);
        setTimeout(function(){
            e.target.parentElement.remove();

        }, 50)
    }
    if(e.target.classList.contains('leftbar') || e.target.classList.contains('rightbar')){
        setTimeout(function(){
            e.target.parentElement.parentElement.remove();
        },50)
    }
});



submit.addEventListener("click", function(e){
    e.preventDefault();
    // console.log(e)
    let filePath = imgURL.value;
    if(filePath === ''){
        return;
    }
    let top = topText.value;
    let bottom = bottomText.value;
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<span class="top" >${top}</span><img src="${filePath}"><span class="bottom">${bottom}</span><div class="close"><div class="leftbar"></div><div class="rightbar"></div></div>`;
    newDiv.classList.add('imgContainer');
    if(whiteFont.checked){
        newDiv.classList.toggle('whiteFont');
    }
    if( sizes[0].checked){
        newDiv.classList.toggle('small')
    } 
    else if( sizes[1].checked){
        newDiv.classList.toggle('medium')
    }
    else if( sizes[2].checked){
        newDiv.classList.toggle('large')
    }

    memeZone.prepend(newDiv);

    imgURL.value = '';
    topText.value = '';
    bottomText.value = '';
});

submit.addEventListener("keypress", function(e){
    if (e.key === 'Enter'){
        e.preventDefault();
    }
    let filePath = imgURL.value;
    if(filePath === ''){
        return;
    }
    let top = topText.value;
    let bottom = bottomText.value;
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<span class="top" >${top}</span><img src="${filePath}"><span class="bottom">${bottom}</span><div class="close"><div class="leftbar"></div><div class="rightbar"></div></div>`;
    newDiv.classList.add('imgContainer');
    if(whiteFont.checked){
        newDiv.classList.toggle('whiteFont');
    }
    if( sizes[0].checked){
        newDiv.classList.toggle('small')
    } 
    else if( sizes[1].checked){
        newDiv.classList.toggle('medium')
    }
    else if( sizes[2].checked){
        newDiv.classList.toggle('large')
    }
    memeZone.prepend(newDiv);

    imgURL.value = '';
    topText.value = '';
    bottomText.value = '';
});