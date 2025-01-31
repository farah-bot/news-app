export const fetchData = async (category: string) => {
  const sources: { [key: string]: string[] } = {
    antara: ['terbaru', 'politik', 'hukum', 'ekonomi', 'bola', 'olahraga', 'humaniora', 'lifestyle', 'hiburan', 'dunia', 'tekno', 'otomotif'],
    cnbc: ['terbaru', 'investment', 'news', 'market', 'entrepreneur', 'syariah', 'tech', 'lifestyle', 'opini', 'profil'],
    cnn: ['terbaru', 'nasional', 'internasional', 'ekonomi', 'olahraga', 'teknologi', 'hiburan', 'gayahidup'],
    jpnn: ['terbaru'],
    kumparan: ['terbaru'],
    merdeka: ['terbaru', 'jakarta', 'dunia', 'gaya', 'olahraga', 'teknologi', 'otomotif', 'khas', 'sehat', 'jateng'],
    okezone: ['terbaru', 'celebrity', 'sports', 'otomotif', 'economy', 'techno', 'lifestyle', 'bola'],
    republika: ['terbaru', 'news', 'daerah', 'khazanah', 'islam', 'internasional', 'bola', 'leisure'],
    sindonews: ['terbaru', 'nasional', 'metro', 'ekbis', 'international', 'daerah', 'sports', 'otomotif', 'tekno', 'sains', 'edukasi', 'lifestyle', 'kalam'],
    suara: ['terbaru', 'bisnis', 'bola', 'lifestyle', 'entertainment', 'otomotif', 'tekno', 'health'],
    tempo: ['nasional', 'bisnis', 'metro', 'dunia', 'bola', 'cantik', 'tekno', 'otomotif', 'seleb', 'gaya', 'travel', 'difabel', 'creativelab', 'inforial', 'event'],
    tribun: ['terbaru', 'bisnis', 'superskor', 'sport', 'seleb', 'lifestyle', 'travel', 'parapuan', 'otomotif', 'techno', 'kesehatan'],
  };

  const source = Object.keys(sources).find((source) =>
    sources[source].includes(category)
  );

  if (!source) {
    throw new Error(`No valid news source found for category: ${category}`);
  }

  try {
    const response = await fetch(`https://api-berita-indonesia.vercel.app/${source}/${category}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch news from ${source} for category: ${category}`);
    }

    const data = await response.json();

    if (!data || !data.data) {
      throw new Error('No news data found in the response');
    }

    return data.data;
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message || 'Unknown error'}`);
  }
};
