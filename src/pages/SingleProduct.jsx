import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function SingleProduct() {

    const { id } = useParams()
    const navigate = useNavigate()
    const api_url = `https://fakestoreapi.com/products/${id}`

    const [product, setProduct] = useState()
    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
            .catch(err => {
                navigate(-1)
            })
    }, [id, navigate])



    return (
        <>
            <div>
                <h1>{product?.title}</h1>
                <p className="text-muted">{product?.category}</p>
                <img src={product?.image} width="200" />
                <p>{product?.description}</p>
                <h3>{product?.price} €</h3>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Torna indietro
                </button>
            </div>
        </>
    )
}