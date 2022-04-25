document.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const form = e.target;
  
  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
  })

      .then((res) => res.text())


      .then((text) => new DOMParser().parseFromString(text, 'text/html'))


      .then((doc) => {

          const result = document.createElement('div');
          result.innerHTML = doc.body.innerHTML;


          result.tabIndex = -1;


          form.parentNode.replaceChild(result, form);


          result.focus();
      })
});


 const formtag = document.getElementById("form");

function handleSubmit(event) {
  event.preventDefault();
}

function init() {
  formtag.addEventListener('submit', handleSubmit)
}