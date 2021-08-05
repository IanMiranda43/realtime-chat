import process from 'process';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

async function JwtGenerate(user, exp) {
	return await jwt.sign({user}, process.env.SECRET_JWT, { expiresIn: exp });
}

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

			const user = await User.create(body);

			const token = await JwtGenerate(user, '1h');
            
			return { status: 200, token, user };
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
			const token = await JwtGenerate(user, '1h');
            
			return { status: 200, token, user };
		} catch(err) {
			console.error(err);
			return { type: 500, error: 'Server error on login with user' };
		}
	}
}

export default new AuthController();