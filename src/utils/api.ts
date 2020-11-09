import Axios from "axios";

const StrapiApi = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`
});

export default StrapiApi;