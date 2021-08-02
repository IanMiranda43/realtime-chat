import User from '../models/User.js';

class AuthController {
	async register(body) {
		try {
			const { email } = body;

			if (await User.findOne({ where: { email } })) {
				return { status: 409, error: 'User already exists' };
			}
            
			if (!body.image) {
				body.image = undefined;
			}
            
			return { status: 200, user: await User.create(body) };
		} catch(err) {
			console.error(err);
			return { type: 500, error: 'Server error on register user' };
		}
	}
	
	async login(body) {
		try {
			const { email } = body;
			const user = await User.findOne({ where: { email } });

			if (!user) {
				return { status: 404, error: 'User not found' };
			}
            
			return { status: 200, user };
		} catch(err) {
			console.error(err);
			return { type: 500, error: 'Server error on login with user' };
		}
	}
}

export default new AuthController();