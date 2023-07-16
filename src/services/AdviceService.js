import axios from "axios";

export default class AdviceService {
  static async getNew() {
    try {
      const timestamp = new Date().getTime();
      const response = await axios.get(
        `https://api.adviceslip.com/advice?timestamp=${timestamp}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
