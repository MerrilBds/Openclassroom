function Cart() {
    const MonsteraPrice = 8;
    const IvyPrice = 10;
    const FlowerPrice = 15;
    return (<div>
        <ul>
            <h2> Panier </h2>
            <li>Monstera : {MonsteraPrice} €</li>
            <li>IvyPrice : {IvyPrice} €</li>
            <li>FlowerPrice : {FlowerPrice} €</li>
            <li>Total : {MonsteraPrice + IvyPrice + FlowerPrice}€</li>

        </ul>
    </div>
    )
}
export default Cart
