import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function SingleProduct() {

    const { id } = useParams()
    const navigate = useNavigate()
    const api_url = `https://fakestoreapi.com/products/${id}`

    useEffect(() => {
        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
            .catch(err => {
                console.error(err)
            })
    }, [id, navigate])

console.log("ID:", id)

    return (
        <>
            <div>
                <h1>
                    Id prodotto : {id}
                </h1>
            </div>


        </>
    )
}