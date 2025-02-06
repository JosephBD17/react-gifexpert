export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=46c4sxPwOCZCm3Z6KaLUs1jNnRKMZ0Zp&q=${category}&limit=2&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const resp = await fetch(url);
    const result = await resp.json();

    if (!result.data) {
        console.error("Error: No se recibieron datos");
        return;
    }

    // Extraemos y transformamos los datos
    const gifs = result.data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }));

    return gifs;
}