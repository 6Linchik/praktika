export default class HousesService {
  static BASE_URL = "http://localhost:5050/house";
  // static ENDPOINTS = {
  //   login: "login",
  //   registration: "registration",
  //   users: "users",
  // };

  async addNewHouse(houseData) {
    const URL = `${HousesService.BASE_URL}/${houseData.houseName}`;
    const res = await axios.post(URL, houseData);
    return res;
  }

  async getHouseByName(houseData) {
    const URL = `${HousesService.BASE_URL}/${houseData.houseName}`;
    const res = await axios.get(URL);
    return res;
  }

  async pushNewDate(id) {
    const URL = `${HousesService.BASE_URL}/pushNewDate/${id}`;
    const res = await axios.patch(URL, { id });
    return res;
  }

  // async getAllHouses() {
  //   const URL = `${HousesService.BASE_URL}/all`;
  //   const res = await axios.get(URL);
  //   return res;
  // }
}
