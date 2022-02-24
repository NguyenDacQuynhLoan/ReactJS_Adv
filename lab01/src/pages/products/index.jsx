import { Link, Route, Routes} from "react-router-dom";
import ListOfProduct from "./list-of-product";
import CreateNew from "./create-new";
import Product from "./product";

export default function Products() {
    return (
        <div>
            <h1>Products Page</h1>
            <div>
                <Link to="/products/new">Create New Product | </Link>
                <Link to="/products/list">List of Products | </Link>
                <Link to="/products/:id">Product</Link>
            </div>
            <hr></hr>
            <Routes >
                <Route  path=":id" element={<Product/>}></Route>
                <Route  path="new" element={<CreateNew/>}></Route>
                <Route path="list"  element={<ListOfProduct/>}></Route>
            </Routes>
        </div>
    )
}
