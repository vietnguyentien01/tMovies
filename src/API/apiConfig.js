const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "ccd4b59d9d2a16dc2d1325e5ecbebf8a",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500lImage: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
