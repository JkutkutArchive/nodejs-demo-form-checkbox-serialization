import express, { Request, Response, NextFunction, Express } from 'express';
const app: Express = express();

const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

app.use(express.json());

const port = process.env.PORT || 6000;

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.post(
  '/',
  upload.none(),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const query = req.body;
    try {
      res.status(200).json({
        message: 'Hurray!!',
        query: query,
        success: true,
      });
    } catch (error: unknown) {
      next(new Error((error as Error).message));
    }
  },
);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
