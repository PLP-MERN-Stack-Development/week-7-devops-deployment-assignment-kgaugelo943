const Sentry = require("@sentry/node");

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});



import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bugRoutes from './routes/bugRoutes.js';
import healthRoute from './routes/health.js';
import * as Sentry from "@sentry/node";
import monitor from 'express-status-monitor';
import { reportWebVitals } from './reportWebVitals';

reportWebVitals(console.log); 

dotenv.config();
const app = express();



app.use(monitor());
app.use(morgan('combined'))
app.use('/api', healthRoute);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

Sentry.init({
dsn: "https://8e3dc498b4773c5668f6bd8fde86e10c@o4509708467896320.ingest.de.sentry.io/4509708547457104",
tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());

app.use('/api/bugs', bugRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  
})
.then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('MongoDB connection error:', err));


