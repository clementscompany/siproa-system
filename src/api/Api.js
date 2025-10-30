
class Api {
  constructor(api) {
    this.AppUrl = api;
  }

  ///// start config 
  async startConfig(data) {
    try {
      const response = await fetch(this.AppUrl + "/config/start", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Erro na requisição POST:", error);
      throw error;
    }
  }
  

  async get(uri) {
    try {
      const response = await fetch(this.AppUrl + uri);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro na requisição GET:", error);
      throw error;
    }
  }

  async post(uri, data) {
    try {
      const response = await fetch(this.AppUrl + uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Erro na requisição POST:", error);
      throw error;
    }
  }
}
export { Api }