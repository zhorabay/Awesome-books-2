import { DateTime } from './modules/luxon.js';
import Book from './modules/book.js';
import UI from './modules/UI.js';

const librarySection = document.getElementById('library');
const formSection = document.getElementById('newbook');
const contactSection = document.getElementById('contact');
const libraryLink = document.getElementById('librarylink');
const newBookLink = document.getElementById('newbooklink');
const contactLink = document.getElementById('contactlink');

formSection.style.display = 'none';
contactSection.style.display = 'none';

function List() {
  librarySection.style.display = 'block';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
}

function Form() {
  formSection.style.display = 'block';
  contactSection.style.display = 'none';
  librarySection.style.display = 'none';
}

function Contact() {
  contactSection.style.display = 'block';
  formSection.style.display = 'none';
  librarySection.style.display = 'none';
}

libraryLink.addEventListener('click', List);
newBookLink.addEventListener('click', Form);
contactLink.addEventListener('click', Contact);

document.getElementById('book-form').addEventListener('submit',
  (e) => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const book = new Book(title, author);

    const ui = new UI();

    if (title === '' || author === '') {
      ui.showAlert('Please fill in all fields', 'error');
    } else {
      ui.addBook(book);

      ui.showAlert('Book Added', 'success');

      ui.clearFields();
    }
    e.preventDefault();
  });

document.getElementById('book-list').addEventListener('click',
  (e) => {
    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
  });

const currentDate = document.querySelector('#time');

const dt = DateTime.local();
const newDate = dt.toLocaleString({
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

setInterval(() => {
  const newTime = dt.toLocaleString(DateTime.TIME_WITH_SECONDS);
  currentDate.innerHTML = `
    <p>${newDate} &nbsp ${newTime}</p>
  `;
}, 1000);
