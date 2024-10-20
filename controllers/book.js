import db from '../models/index.js';

const Book = db.books;

const bookControllers = {
    getAll: async (req, res) => {
        try {
            const books = await Book.findAll();
            const token = req.cookies.token;
            console.log('Books fetched:', books);
            res.render('layout', {
                title: 'All my books',
                body: 'includes/book/bookList',
                books: books,
                token
            });
        } catch (err) {
            console.error('Error fetching books:', err);
            res.status(500).send('Server Error');
        }
    },

    getOne: async (req, res) => {
        try {
            const bookId = req.params.id;
            const token = req.cookies.token;
            const book = await Book.findOne({
                where: {
                    id: bookId
                }
            });

            if (!book) {
                return res.status(404).send('Book not found');
            }

            console.log('Book fetched:', book); // Log to verify book data

            res.render('layout', {
                title: `Details for ${book.title}`,
                body: 'includes/book/bookDetails',
                book: book,
                token
            });
        } catch (err) {
            console.error('Error fetching book:', err);
            res.status(500).send('Server Error');
        }
    },

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

        console.log('Book to be created:', book);

        try {
            const newBook = await Book.create(book);
            res.status(201).redirect(`/books/books`);
        } catch (err) {
            console.error('Error creating book:', err);
            res.status(500).send({
                message: 'Insert correct data creating the book'
            });
        }
    },

    updateBook: async (req, res) => {
        try {
            const bookId = req.params.id;
            const { title, author, price, image_url, year, description } =
                req.body;

            console.log('Updating book with ID:', bookId);
            console.log('Data received for update:', req.body);

            const book = await Book.findByPk(bookId);

            if (!book) {
                return res.status(404).send('Book not found');
            }

            await book.update({
                title,
                author,
                price,
                year,
                img: image_url,
                description
            });

            console.log('Book updated successfully');

            
            res.redirect(`/books/books/${bookId}`);
        } catch (error) {
            console.error('Error updating book:', error);
            res.status(500).send('Server error');
        }
    },

    removeBook: async (req, res) => {
        try {
            const bookId = req.params.id;

            const book = await Book.findByPk(bookId);
            if (!book) {
                return res.status(404).send('Book not found');
            }

            await book.destroy();

            console.log(`Book with ID ${bookId} deleted successfully`);

            res.redirect('/books/books');
        } catch (error) {
            console.error('Error deleting book:', error);
            res.status(500).send('Server error');
        }
    },

    addBookForm: async (req, res) => {
        const token = req.cookies.token;
        res.status(200).render('layout', {
            title: 'Add a new Book',
            body: 'includes/book/addBookForm',
            token

        });
    },
    updateBookForm: async (req, res) => {
        try {
            const bookId = req.params.id;
            const book = await Book.findByPk(bookId);
            const token = req.cookies.token;
            if (!book) {
                return res.status(404).send('Book not found');
            }

            res.render('layout', {
                title: 'Update Book',
                body: 'includes/book/updateBookForm',
                book: book,
                token
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    }
};

export default bookControllers;
