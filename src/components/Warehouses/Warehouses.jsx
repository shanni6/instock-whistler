import "./Warehouses.scss";

import { Link } from "react-router-dom";

function Warehouses() {
    return (
        <section>
            <h1>Warehouses</h1>
            <input placeholder="Search..." type="search" />
            <Link to="">+ Add New Warehouse</Link>
        </section>
    );
}

export default Warehouses;
