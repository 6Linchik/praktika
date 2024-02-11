import DatesService from "../../services/datesService.js";
import HousesService from "../../services/housesService.js";
import { STORAGE_KEYS, load } from "../../services/storage.js";

const refs = {
  dateForm: document.getElementById("dateForm"),
};

const datesController = new DatesService();
const housesController = new HousesService();

refs.dateForm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const newDate = Object.fromEntries(formData.entries());

  const houseId = load(STORAGE_KEYS.houseId);
  try {
    const res = await datesController.addNewDate(newDate);
    if (res.status === 200) {
      Notiflix.Notify.success("Added!");

      await housesController.pushNewDate(houseId);

      location.href = "../resultPage/resultPage.html";
    }
  } catch (err) {
    console.log(err);
    Notiflix.Notify.failure(err.response.data.message);
  }
}
