import API from "@/helper/axios";

export class SampleAPIs {
    async getSampleData() {
        // GET request
        const { data } = await API.get("/sample");
        return data;
    }

    async createSample(payload: { name: string; value: number }) {
        // POST request
        const { data } = await API.post("/sample", payload);
        return data;
    }
}