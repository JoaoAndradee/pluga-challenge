const apiUrl = 'https://pluga.co/ferramentas_search.json';

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Erro ao obter dados da API: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default fetchData;
