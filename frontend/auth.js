import AuthService from "./services/authService.js";
import { STORAGE_KEYS, save } from "./services/storage.js";

const refs = {
  regForm: document.getElementById("regForm"),
  loginForm: document.getElementById("loginForm"),
};

const authController = new AuthService();

refs.loginForm.addEventListener("submit", handleLogin);
refs.regForm.addEventListener("submit", handleReg);

async function handleLogin(event) {
  event.preventDefault();
  const user = {
    email: event.currentTarget.elements.email.value.trim(),
    password: event.currentTarget.elements.password.value.trim(),
  };

  try {
    const res = await authController.login(user);
    if (res.status === 200) {
      Notiflix.Notify.success("Welcome back!");
      save(STORAGE_KEYS.email, user.email);
      location.href = "./pages/formPage/formPage.html";
    }
  } catch (err) {
    Notiflix.Notify.failure(err.response.data.message);
  }
}

async function handleReg(event) {
  event.preventDefault();

  const user = {
    email: event.currentTarget.elements.email.value.trim(),
    password: event.currentTarget.elements.password.value.trim(),
  };

  try {
    const res = await authController.registration(user);
    if (res.status === 200) {
      Notiflix.Notify.success("User successfully registered!");
      save(STORAGE_KEYS.email, user.email);
      location.href = "./pages/formPage/formPage.html";
    }
  } catch (err) {
    Notiflix.Notify.failure(err.response.data.message);
  }
}
