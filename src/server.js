import 'dotenv/config';
import process from 'process';
import express from 'express';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
	console.log(`User ${socket.id} is connected`);

	socket.on('newMessage', (message) => {
		io.emit('newMessage', { sender: socket.id, message });
	});
    
	socket.on('disconnect', () => {
		console.log(`User ${socket.id} disconnected`);
	});
});

app.use(express.static(path.resolve('src', 'public')));

const port = process.env.PORT || 3333;
server.listen(port, console.log(`Server is running at port:${port}`));