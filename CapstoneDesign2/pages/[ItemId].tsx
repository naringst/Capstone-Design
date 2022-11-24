import { useRouter } from "next/router";

const DetailPage = () =>{
    const router = useRouter();

    const ItemId = router.query.ItemId

    //send a request to the backend API
    //to fetch the news item with newsId


    return <h1>the Detail Page</h1>
}

export default DetailPage;

