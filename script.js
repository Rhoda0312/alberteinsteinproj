const url = 'https://upadhayay.github.io/db.json';
const publicationSection = document.querySelector('#pub');

fetch(url)
  .then(response => response.json())
  .then(data => {
    const books = data.books;
    let pubHTML = '';
    books.forEach(book => {
      if (book.published) {
        pubHTML += `
        <div class="pubchild">
            <h3>Title: ${book.title}</h3>
            <p>published: ${book.published}</p>
            <p>year: ${book.year}</p>
            <a href="#" class="read_more">Read More</a>
        </div>`;
      }
    });
    publicationSection.innerHTML = `<h2> PUBLICATION </h2>${pubHTML}`;
  })
  .catch(error => {
    console.error('Error:', error);
  });


