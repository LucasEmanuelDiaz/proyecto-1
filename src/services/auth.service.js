import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model.js';

// usamos las variables de entorno
const { JWT_SECRET, JWT_EXPIRES_IN, BCRYPT_SALT_ROUNDS } = process.env;

export class AuthService {
  constructor () {
    this.userModel = new UserModel();
  }

  async register(userData) {
    const { email, password, name } = userData;
    console.log('Registering user:', userData);
    if (await this.userModel.userExists(email)) {
      throw new Error('Usuario ya existe');
    }

    const passwordHash = await this.hashPassword(password);

    const newUser = await this.userModel.register({
      email,
      passwordHash,
      name
    });

    return this.generateResponse(newUser);
  }

  async login({ email, password }) {
    const user = await this.userModel.getByEmail(email);
    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      throw new Error('Credenciales inválidas');
    }

    return this.generateResponse(user);
  }

  async hashPassword(password) {
    const parsedSalt = parseInt(BCRYPT_SALT_ROUNDS, 10);
    const salt = await bcrypt.genSalt(parsedSalt);
    return bcrypt.hash(password, salt);
  }

  async generateResponse(user) {
    const token = await this.generateToken(user);
    return {
      token,
      user: { id: user.id, email: user.email, name: user.name }
    };
  }

  async generateToken(user) {
    return jwt.sign(
      { sub: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );
  }
}