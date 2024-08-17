export type ProductProps = {
    title: string;
    image?: string;
    description: string;
    price: number;
}

export const Product = (props: ProductProps) => {
    return (
        <div className="productContainer">
            {props.image ? <image href={props.image} /> : ''}
            <div className="title">
                {props.title}
            </div>
            <div className="price">
                ${(props.price / 100).toFixed(2)}
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    )
}