import AuthController from './AuthController.js';

async function createUser(socket, body) {
	const createUser = await AuthController.register(body);

	if (createUser.user) {
		createUser.user = createUser.user.dataValues;
	}

	createUser.userSocketId = socket.id;
	return createUser;
}

export default class WebSocketEventsController{
	constructor(io) {
		this.io = io;
        
		io.on('connection', (socket) => {
			console.log(`User ${socket.id} connected`);
            
			socket.on('register', (body) => this.loginRequest(socket, body));
            
			socket.on('sendMessage', (message) => this.sendMessageToAllUsers(socket, message));
            
			socket.on('disconnect', () => {
				console.log(`User ${socket.id} disconnected`);
			});
		});
	}

	async loginRequest(socket, body) {
		const userLogin = await AuthController.login(body);
		const { status } = userLogin;
                
		if (status == 404) {
			return this.io.emit('userLoginResponse', await createUser(socket, body));
		}
        
		if (userLogin.user) {
			userLogin.user = userLogin.user.dataValues;
		}

		userLogin.userSocketId = socket.id;
		return this.io.emit('userLoginResponse', userLogin);
	}

	sendMessageToAllUsers(socket, message) {
		return this.io.emit('receiveMessage', { sender: socket.id, message });
	}
}