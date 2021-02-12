const input = document.querySelector('input'),
      btn = document.querySelector('.btn', '.second');

btn.addEventListener('hover', (event)=>{
    input.textContent = 'Input your email';
});