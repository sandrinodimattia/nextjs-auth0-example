import oidc from '../../lib/auth0';

export default async function logout(req, res) {
  try {
    await oidc.handleLogout(req, res);
  } catch(error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
