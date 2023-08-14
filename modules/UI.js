export default class UI {
  addBook(book) {
    const title = document.getElementById('book');
    this.title = title;
    const list = document.getElementById('book-list');
    const flex = document.createElement('div');
    flex.classList.add('lists');
    flex.innerHTML = `
  
      <p><span>"${book.title}"</span> by <span>${book.author}</span></p>
      <button type="submit" class="submit">Remove</button>
     
      `;
    list.appendChild(flex);
  }

  showAlert(message, className) {
    const title = document.getElementById('book');
    this.title = title;
    const div = document.createElement('div');
    div.className = `alert ${className} `;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('#newbook');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2000);
  }

  deleteBook(target) {
    const title = document.getElementById('book');
    this.title = title;
    if (target.className === 'submit') {
      target.parentElement.remove();
    }
  }

  clearFields() {
    const title = document.getElementById('book');
    this.title = title;
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}