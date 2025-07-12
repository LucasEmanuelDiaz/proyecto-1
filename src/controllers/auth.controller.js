/** registrar un usuario */
export const register = (req, res) => {
  res.status(201).json({ msg: 'Usuario registrado' })
}

/** iniciar sesión */
export const login = (req, res) => {
  res.json({ msg: 'Iniciar sesión' })
}

/** cerrar sesión */
export const logout = (req, res) => {
  res.json({ msg: 'Cerrar sesión' })
}
