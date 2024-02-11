export default class DatesService {
  static BASE_URL = "http://localhost:5050/dates";

  async addNewDate(dateData) {
    const URL = `${DatesService.BASE_URL}/`;
    const res = await axios.post(URL, dateData);
    return res;
  }
}
