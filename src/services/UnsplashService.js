import axios from 'axios';

const unsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  }
});

// Fetch a list of photos
export const fetchPhotos = async (page = 1, perPage = 10) => {
  try {
    const response = await unsplashAPI.get(`/photos`, {
      params: { page, per_page: perPage }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch photos:", error);
    throw error;
  }
};

// Search for photos by query
export const searchPhotos = async (query, page = 1, perPage = 10) => {
  try {
    const response = await unsplashAPI.get(`/search/photos`, {
      params: { query, page, per_page: perPage }
    });
    return response.data.results; // Note: the search endpoint wraps results in a `results` object.
  } catch (error) {
    console.error(`Failed to search photos with query "${query}":`, error);
    throw error;
  }
};

// Fetch a list of collections
export const fetchCollections = async (page = 1, perPage = 10) => {
  try {
    const response = await unsplashAPI.get(`/collections`, {
      params: { page, per_page: perPage }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch collections:", error);
    throw error;
  }
};

// Add more functions as needed for different endpoints
