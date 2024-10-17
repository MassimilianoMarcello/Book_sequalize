import express from 'express';
import bookControllers from '../controllers/book.js';
// import verifyToken from '../middleware/verifyToken.js';
// import verifyAdmin from '../middleware/verifyAdmin.js';

const router = express.Router();
const {
    getAll,
    getOne,
    addBook,
    updateBook,
    removeBook,
    addBookForm,
    updateBookForm
} = bookControllers;

router.get('/books', getAll);
router.get('/books/:id', getOne);
router.post('/add-book', addBook);
router.put('/update-book/:id', updateBook);

router.delete('/delete-book/:id', removeBook);
router.get('/add-book', addBookForm);
router.get('/update-book/:id', updateBookForm);
export default router;
