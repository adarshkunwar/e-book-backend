import { Router } from 'express';
import { bookController } from '../controller/books.controller';

const router = Router();

router.route('/').get(bookController.getAllBooks);
router.route('/').post(bookController.createBook);
router.route('/:id').get(bookController.getBook);
router.route('/:id').put(bookController.updateBook);
router.route('/:id').delete(bookController.deleteBook);

export default router;
