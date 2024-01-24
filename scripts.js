const library = [];
let counter = 1;
let Title = document.querySelector('#title')
let Author = document.querySelector('#author')
let Genre = document.querySelector('#genre')
let Description = document.querySelector('#description')
let submitBtn = document.querySelector('#submit')

function Book(title, author, genre, description){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.description = description;
    this.number = counter
}


function addBookToLibrary(title, author, genre, description) {

    const newBook = new Book(title, author, genre, description);
    library.push(newBook);
}

function submitForm(event) {
    event.preventDefault();
}

function removeBook(num){
    library.forEach(book => {
        if(book.number == num){
            library.splice(library.indexOf(book),1)
        }        
    });
};

submitBtn.addEventListener('click',function(){
    if(Title.value != '' && Author.value != '' && Genre.value != '' && Description.value != ''){
        addBookToLibrary(Title.value, Author.value, Genre.value, Description.value)
        
        let newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.innerHTML = `<h3>${Title.value}</h3><br> Written by ${Author.value}<br> Genre: ${Genre.value} <br> <br>Description: ${Description.value} <br> <br>${counter} <br> <br> `;

        let rmBtn = document.createElement('button')
        rmBtn.innerHTML = 'Remove book';
        rmBtn.addEventListener('click',function() {
            // Get the parent node (document.body) and remove the card
            document.body.removeChild(newCard);
        });
        rmBtn.addEventListener('click',() => removeBook(counter))
        
        let toggle = document.createElement('label');
        toggle.classList.add("switch");
        var htmlContent =  'Read' +
                      '<input type="checkbox">' +
                      '<span class="slider round"></span>';
                    

        toggle.innerHTML = htmlContent

        newCard.appendChild(toggle);
        newCard.appendChild(rmBtn);

        Title.value = ''
        Author.value = ''
        Genre.value = ''
        Description.value = ''
        counter = counter + 1
        document.body.appendChild(newCard);
    }
    else{
        alert('Book not added, not every camp was filled!')
    }
})


