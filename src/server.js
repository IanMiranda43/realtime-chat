import 'dotenv/config';
import process from 'process';
import express from 'express';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import WebSocketEventsController from './app/controllers/WebSocketEventsController.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000'
	}
});

new WebSocketEventsController(io);

const publicFolderPath = path.resolve('src', 'public');
app.use(express.static(publicFolderPath));

const port = process.env.PORT || 3000;
server.listen(port, console.log(`Server is running at port:${port}`));