import express from 'express';
import bookControllers from '../controllers/book.js';
import verifyToken from '../middleware/verifyToken.js';


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
router.get('/books/:id',verifyToken, getOne);
router.post('/add-book',verifyToken, addBook);
router.put('/update-book/:id',verifyToken, updateBook);

router.delete('/delete-book/:id',verifyToken, removeBook);
router.get('/add-book',verifyToken, addBookForm);
router.get('/update-book/:id',verifyToken, updateBookForm);
export default router;
