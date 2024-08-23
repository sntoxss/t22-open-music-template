export async function fetchMusics() {
  try {
    const response = await fetch('https://openmusic-fake-api.onrender.com/api/musics');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
    return null;
  }
}

