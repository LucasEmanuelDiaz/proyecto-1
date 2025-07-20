import { AuthService } from "../services/auth.service.js";

const authService = new AuthService();

/** registrar un usuario */
export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = await authService.register({ email, password, name });
    res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

/** iniciar sesión */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.login({ email, password });
    res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

/** cerrar sesión */
export const logout = (req, res) => {
  res.json({ msg: 'Cerrar sesión' });
};
