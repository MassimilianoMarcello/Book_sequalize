import db from '../models/index.js';

const Book = db.books;

const bookControllers = {
    getAll: async (req, res) => {
        try {
            const books = await Book.findAll();
            console.log('Books fetched:', books); // Aggiungi questo log
            res.render('layout', {
                title: 'All my books',
                body: 'includes/book/bookList',
                books: books // Passa i dati alla vista
            });
        } catch (err) {
            console.error('Error fetching books:', err);
            res.status(500).send('Server Error');
        }},
    
    getOne:async (req, res) => {
        try {
            const bookId = req.params.id; // Ottieni l'ID del libro dalla richiesta
            const book = await Book.findOne({
                where: {
                    id: bookId
                }
            });
    
            if (!book) {
                return res.status(404).send('Book not found');
            }
    
            console.log('Book fetched:', book); // Log per verificare i dati del libro
    
            // Passa il libro alla vista
            res.render('layout', {
                title: `Details for ${book.title}`,
                body: 'includes/book/bookDetails', // Modifica il percorso se necessario
                book: book
            });
        } catch (err) {
            console.error('Error fetching book:', err);
            res.status(500).send('Server Error');
        }},
  
    addBook: async (req, res) => {
        const { name, author, price, image_url, year, description } = req.body;  
        
        const book = {
            title: name,  
            author,
            price,
            img: image_url,  
            year,
            description
        };
    
        console.log("Book to be created:", book); // Log dei dati per il debug
        
        try {
            const newBook = await Book.create(book);
            res.status(201).redirect(`/books/books`);
        } catch (err) {
            console.error("Error creating book:", err); // Log dettagliato dell'errore
            res.status(500).send({ message: 'Insert correct data creating the book' });
        }
    },
    
    
    updateBook:async(req,res)=>{},
    removeBook:async(req,res)=>{},
    addBookForm:async(req,res)=>{
        res.status(200).render('layout', {
            title: 'Add a new Book',
            body: 'includes/book/addBookForm',
          
        });
    },
    updateBookForm:async(req,res)=>{}

};

export default bookControllers;
