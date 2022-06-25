import { useEffect, useState } from "react"

const useBookDetail = bookId => {
    const [detail, setDetail] = useState({});
    useEffect(() => {
        try {

            fetch(`http://localhost:5000/inventory/${bookId}`)
                .then(res => res.json())
                .then(data => setDetail(data))

        } catch (error) {
            console.log(error);
        }
    }, [bookId])

    return [detail]
}
export default useBookDetail;