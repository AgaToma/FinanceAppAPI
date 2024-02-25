import axios from "axios";
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5160/api/portfolio/";

export const portfolioAddAPI = async (symbol: string) => {
    try {
        const data = await axios.post
        return data;
    } catch (error) {
        handleError(error);
    }
}

export const portfolioGetAPI = async () => {
    try {
      const data = await axios.get<PortfolioGet[]>(api);
      return data;
    } catch (error) {
      handleError(error);
    }
  };