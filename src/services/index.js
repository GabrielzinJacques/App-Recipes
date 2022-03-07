const FetchEats = async (url) => {
  const API = url;
  try {
    const { results } = await (await fetch(API)).json();
    return results;
  } catch (error) {
    return error;
  }
};

export default FetchEats;