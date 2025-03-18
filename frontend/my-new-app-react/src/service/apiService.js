class ApiService{
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    async fetchData(endpoint, options= {}){
        try{
            const response= await fetch(`${this.baseURL}${endpoint}`, options);
            if(!response.ok){
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);     
            }
            return await response.json()

        }catch(error){
            console.log("Erreur Api:", error);
            throw error;
        }
    }
    async createRecette(data){
        return this.fetchData("/recette", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    }
    async getRecette(id) {
        return this.fetchData(`/recette/${id}`);
    }
    async deleteRecette(id) {
        return this.fetchData(`/recette/${id}`, { method: "DELETE" });
    }
    async updateRecette(id, data) {
        return this.fetchData(`/recette/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
    }
}

export const apiService = new ApiService("http://localhost:3000/api");