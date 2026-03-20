import { useState, useEffect } from "react"

export default function Products() {

    const api_url = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <div className="container">
            <div className="row g-4 mt-2">
                {products.map(product => (
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={product.id}>
                        <div className="card" style={{ width: "20rem" }}>
                            <img src={product.image} className="card-img-top" style={{ objectFit: "contain" }} alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                                {<p className="card-text">{product.description}</p>}
                            </div>
                            <div className="card-footer">{product.category}</div>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    )
}