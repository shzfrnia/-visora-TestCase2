import { requestStatuses } from "./data/request-statuses";
import { requests } from "./data/requests";

export default class API {
  static async getRequestStatuses() {
    return requestStatuses.map((el) => ({ ...el }));
  }

  static async getRequests() {
    return requests.map((el) => ({ ...el }));
  }

  static getRequestById(id) {
    return requests.filter((r) => r.id == id)[0];
  }

  static async updateRequest(updatedRequest) {
    const request = API.getRequestById(updatedRequest.id);
    for (const [key, value] of Object.entries(updatedRequest)) {
      request[key] = value;
    }
    return API.getRequests()
  }
}
