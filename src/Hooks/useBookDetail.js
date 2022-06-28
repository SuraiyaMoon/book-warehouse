import { useEffect, useState } from "react"

const useBookDetail = bookId => {
    const [detail, setDetail] = useState({});
    useEffect(() => {
        try {

            fetch(`https://book-warehouse.herokuapp.com/inventory/${bookId}`)
                .then(res => res.json())
                .then(data => setDetail(data))

        } catch (error) {
            console.log(error);
        }
    }, [bookId])

    return [detail, setDetail]
}
export default useBookDetail;