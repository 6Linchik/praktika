export default class AuthService {
  static BASE_URL = "http://localhost:5050/auth";
  static ENDPOINTS = {
    login: "login",
    registration: "registration",
    users: "users",
    pushNewHouse: "pushNewHouse",
  };

  async login({ email, password }) {
    const URL = `${AuthService.BASE_URL}/${AuthService.ENDPOINTS.login}`;
    const res = await axios.post(URL, { email, password });
    return res;
  }

  async registration({ email, password }) {
    const URL = `${AuthService.BASE_URL}/${AuthService.ENDPOINTS.registration}`;
    const res = await axios.post(URL, { email, password });
    return res;
  }

  async getUserByEmail(email) {
    const URL = `${AuthService.BASE_URL}/${AuthService.ENDPOINTS.users}/${email}`;
    const res = await axios.get(URL);
    return res;
  }

  async pushNewHouse(email, id) {
    const URL = `${AuthService.BASE_URL}/${AuthService.ENDPOINTS.pushNewHouse}/${email}`;
    const res = await axios.patch(URL, { id });
    return res;
  }
}
