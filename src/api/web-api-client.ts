import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import type { ApiError } from "../types/common";

const axiosInstance: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://url-shortener-service.p.rapidapi.com",
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "c714f15a4fmsh834b9c29cf34deap1d7308jsned36279fefe2",
    "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const apiError = handleApiError(error);
    return Promise.reject(apiError);
  }
);

// Error handler function
function handleApiError(error: AxiosError): ApiError {
  if (error.response) {
    const { status, data } = error.response;
    const errorData = data as { message?: string; code?: string };
    return {
      message: errorData?.message || `HTTP ${status} Error`,
      status,
      code: errorData?.code,
      details: data,
    };
  } else if (error.request) {
    return {
      message: "Network error - no response from server",
      status: 0,
      code: "NETWORK_ERROR",
      details: error.request,
    };
  } else {
    return {
      message: error.message || "Unknown error occurred",
      status: 0,
      code: "UNKNOWN_ERROR",
      details: error,
    };
  }
}

export class WebApiClient {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  /**
   * GET request
   * @param url - The endpoint URL
   * @param config - Optional axios config
   * @returns Promise with the response data
   */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.instance.get<T>(url, config);
      return response.data;
    } catch (error) {
      throw error as ApiError;
    }
  }

  /**
   * POST request
   * @param url - The endpoint URL
   * @param data - The request payload
   * @param config - Optional axios config
   * @returns Promise with the response data
   */
  async post<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.instance.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw error as ApiError;
    }
  }

  /**
   * PUT request
   * @param url - The endpoint URL
   * @param data - The request payload
   * @param config - Optional axios config
   * @returns Promise with the response data
   */
  async put<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.instance.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw error as ApiError;
    }
  }

  /**
   * DELETE request
   * @param url - The endpoint URL
   * @param config - Optional axios config
   * @returns Promise with the response data
   */
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.instance.delete<T>(url, config);
      return response.data;
    } catch (error) {
      throw error as ApiError;
    }
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }
}

export const webApiClient = new WebApiClient(axiosInstance);

export const axiosClient = axiosInstance;
