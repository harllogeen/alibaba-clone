function Cards6() {
    const arr = [
        {
            description: "Baby Boy Rashie swimsuit with Sun Protection Boys",
            value: "2 Pieces (Min. Order)",
            img: "./assets/you1.jpg",
            price: "$7.50 - $13.50",
        },
        {
            description: "Aluminium Alloy Garden Fence Panels Aluminium Swimming",
            value: "1.0 Sets(Min. Order)",
            img: "./assets/you2.jpg",
            price: "$12.00- $14.00",
        },
        {
            description: "Children's boxer swimming trunks baby sun protection",
            value: "1 Set(Min. Order)",
            img:"./assets/you3.jpg",
            price: "$4.50 - $5.10",
        },
        {
            description: "dropshipDrop Shipping Gold Plated BTC Limited Edition",
            value: "100 Pieces (Min. Order)",
            img:"./assets/you4.jpg",
            price: "$0.25 - $0.28",
        }, {
            description: "Cheap outdoor portable toilets mobile prefabricated ",
            value: "1 Piece (Min. Order)",
            img:"./assets/you5.jpg",
            price: "$2,800.00 - $3,000.00",
        }, {
            description: "Pet backpack portable Casual pet bag for pet custom",
            value: "3 Pieces (Min. Order)",
            img: "./assets/you6.jpg",
            price: "$19.66 - $26.99",
        },
        {
            description: "Baby Boy Rashie swimsuit with Sun Protection Boys",
            value: "2 Pieces (Min. Order)",
            img: "./assets/you7.jpg",
            price: "$3.70 - $11.30",
        },
        {
            description: "Aluminium Alloy Garden Fence Panels Aluminium Swimming",
            value: "1.0 Sets(Min. Order)",
            img: "./assets/you8.jpg",
            price: "$12.55- $23.10",
        },
        {
            description: "Children's boxer swimming trunks baby sun protection",
            value: "1 Set(Min. Order)",
            img:"./assets/you9.jpg",
            price: "$3.20 - $5.83",
        },
        {
            description: "dropshipDrop Shipping Gold Plated BTC Limited Edition ",
            value: "100 Pieces (Min. Order)",
            img:"./assets/you10.jpg",
            price: "$0.38 - $2.28",
        }, {
            description: "Cheap outdoor portable toilets mobile prefabricated",
            value: "1 Piece (Min. Order)",
            img:"./assets/you11.jpg",
            price: "$1,340.00 - $3,600.00",
        }, {
            description: "Pet backpack portable Casual pet bag for pet custom",
            value: "3 Pieces (Min. Order)",
            img:"./assets/you12.jpg",
            price: "$17.64 - $23.19",
        },
    ]
    return (
        <div className="order">
            <div className="order2">
                <div className="CONSUMER">
                    <h2 className="headerTitle">Just For You</h2>
                    <span></span>
                    <div class="label"></div>
                </div>
                <div className="order3">
                    {arr.map((e, i) => {
                        return (
                            <div className="order4" key={i}>
                                <img className="size" src={e.img} />
                                <p className="description">{e.description}</p>
                                <p className="price">{e.price}</p>
                                <p className="value">{e.value}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cards6