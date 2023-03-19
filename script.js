fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const element1 = data.find(item => item.id === 7);
    
    const paragraph1 = `<p>${element1.title}</p>`;
    const paragraph2 = `<p>${element1.body}</p>`;

    document.querySelector('#text1').insertAdjacentHTML('beforeend', paragraph1);
    document.querySelector('#text1').insertAdjacentHTML('beforeend', paragraph2);
    
    const element2 = data.find(item => item.id === 8);

    const paragraph3 = `<p>${element2.title}</p>`;
    const paragraph4 = `<p>${element2.body}</p>`;

    document.querySelector('#text1').insertAdjacentHTML('beforeend', paragraph3);
    document.querySelector('#text1').insertAdjacentHTML('beforeend', paragraph4);

  })
  .catch(error => console.log(error)); 