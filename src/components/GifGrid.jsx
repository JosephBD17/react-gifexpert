import { GifItem } from "../components/GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h4>{category}</h4>
            {
                isLoading && (<h2>Cargando</h2>)
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id}
                            title={image.title}
                            url={image.url} />
                    ))
                }
            </div>
        </>
    )
}
