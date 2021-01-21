document.addEventListener('DOMContentLoaded', function() {
    let timer = setInterval(theTimer, 1000);
    counter = document.getElementById('counter');
    minus = document.getElementById('minus');
    plus = document.getElementById('plus');
    heart = document.getElementById('heart');
    pause = document.getElementById('pause');
    form = document.getElementById('comment-form')

    function theTimer(){
        counter.innerText = parseInt(counter.innerText) + 1;
    }

    minus.addEventListener('click', function() {
        counter.innerText = parseInt(counter.innerText) - 1;
    })

    plus.addEventListener('click', function() {
        counter.innerText = parseInt(counter.innerText) + 1;
    })

    pause.addEventListener('click', function() {
        if (pause.innerText == 'pause') {
            minus.disabled = true;
            plus. disabled = true;
            heart.disabled = true;
            pause.innerText = 'resume'
            clearInterval(timer);    
        }else {
            minus.disabled = false;
            plus. disabled = false;
            heart.disabled = false;
            pause.innerText = 'pause';
            timer = setInterval(theTimer, 1000);
        }
    })

    heart.addEventListener('click', function() {
        heartCount = parseInt(counter.innerText);
        likes = document.querySelector('.likes');
        li = document.createElement('li');
        li.innerHTML = `${heartCount}` + " has been liked <span>1</span> time";
        likes.appendChild(li);

    })

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let comment = document.getElementById('comment-input');
        let commentList = document.getElementById('list');
        commentList.innerText = comment.value
       
    })


})