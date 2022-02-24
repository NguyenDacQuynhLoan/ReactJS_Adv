import {useParams} from 'react-router-dom';

export default function Product(props) {
    let param = useParams();
    return (
        <div>
            <h5>Fix URL /products/"Number you want to add"</h5>
            <h1>{param.id}</h1>
        </div>
    )
}
