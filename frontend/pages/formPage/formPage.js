import AuthService from "../../services/authService.js";
import HousesService from "../../services/housesService.js";
import { STORAGE_KEYS, load, save } from "../../services/storage.js";

const refs = {
  mainForm: document.getElementById("mainForm"),
};

const housesController = new HousesService();
const authController = new AuthService();

refs.mainForm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const newHouse = Object.fromEntries(formData.entries());

  newHouse.email = load(STORAGE_KEYS.email);

  try {
    const res = await housesController.addNewHouse(newHouse);
    if (res.status === 200) {
      Notiflix.Notify.success("Added!");

      save(STORAGE_KEYS.houseId, res.data._id);

      await authController.pushNewHouse(newHouse.email, res.data._id);

      location.href = "../dateFormPage/dateFormPage.html";
    }
  } catch (err) {
    console.log(err);
    Notiflix.Notify.failure(err.response.data.message);
  }
}
