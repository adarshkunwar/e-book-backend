import { warn } from "console";
import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";

import { Book } from "../entity/Book";

const booksRepo = AppDataSource.getRepository(Book);
const bookController = {
  async getAllBooks(req: Request, res: Response, next: NextFunction) {
    try {
      const books = await booksRepo.find();
      if (books.length === 0) {
        return res.status(400).json({
          status: "success",
          message: "No books found",
        });
      } else
        res.status(404).json({
          status: "failure",
          data: books,
        });
    } catch (error) {
      next(error);
    }
  },

  async getBook(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await booksRepo.findOne(req.params.id);
      if (book === undefined || book === null) {
        return res.status(400).json({
          status: "success",
          message: `No book with id:${req.params.id} found`,
        });
      } else
        res.status(200).json({
          status: "success",
          data: book,
        });
    } catch (error) {
      next(error);
    }
  },

  async createBook(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await booksRepo.save(req.body);
      if (book === undefined || book === null) {
        return res.status(400).json({
          status: "failure",
          message: "Book not created",
        });
      } else {
        res.status(201).json({
          status: "success",
          message: "Book created",
          data: book,
        });
      }
    } catch (error) {
      next(error);
    }
  },

  async updateBook(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await booksRepo.findOne(req.params.id);
      if (book === undefined || book === null) {
        return res.status(400).json({
          status: "failure",
          message: `No book with id:${req.params.id} found`,
        });
      } else {
        const updatedBook = await booksRepo.save({
          ...book,
          ...req.body,
        });
        res.status(200).json({
          status: "success",
          message: `Book with id:${req.params.id} updated`,
          data: updatedBook,
        });
      }
    } catch (error) {
      next(error);
    }
  },

  async deleteBook(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await booksRepo.findOne(req.params.id);
      if (book === undefined || book === null) {
        return res.status(400).json({
          status: "failure",
          message: `No book with id:${req.params.id} found`,
        });
      } else {
        const deletedBook = await booksRepo.delete(req.params.id);
        res.status(200).json({
          status: "success",
          message: `Book with id:${req.params.id} deleted`,
          data: deletedBook,
        });
      }
    } catch (error) {
      next(error);
    }
  },
};

export { bookController };
