import Card from '@mui/material/Card';

function Cards5() {
    const arr = [
        {
            name: "Premium OEM Factories",
            description: "One-stop services for your store",
            img: "./assets/tire1.jpg",
        },
        {
            name: "Top sales",
            description: "Motocycle Parts & Accessories",
            img: "./assets/tire3.jpg",
        },
        {
            name: "Marine Parts & Accessories",
            
            img: "./assets/tire2.jpg",
        },
        {
            name: "Wheels, Tires & Accessories",
           
            img: "./assets/tire8.jpg",
        },
    ]
    const arr2 = [
        {
            name: "Delivered Duty Paid (DDP)",
            description: "Shipping and import duties included",
            img: "./assets/tire4.jpg",
        },
        {
            name: "Recovery & Off-road Accessories",
           
            img: "./assets/tire6.jpg",
        },
        {
            name: "Authomotive Part & Accessories",
            img: "./assets/tire7.jpg",
        },
        {
            name: "Bus Part & Accessories",
            img: "./assets/tire5.jpg",
        },
    ]
    return (
        <div className="map">
            <div className="CONSUMER">
                <h2 class="headerTitle">VEHICLES & ACCESSORIES</h2>
                <span></span>
                <div class="label"></div>
            </div>
            <div className="map2">
                <div className="mapimg">
                    <img src="https://img.alicdn.com/tfs/TB1uW2kv3HqK1RjSZFkXXX.WFXa-300-320.png" />
                </div>
                <div className="map5">
                    {arr.map((e, i) => {
                        return (
                            <div key={i} className="map3 child">
                                <h3 className="mapchild bold">{e.name}</h3>
                                <p className="mapchild2">{e.description}</p>
                                <img className="mapchild3" src={e.img} />
                            </div>
                        )
                    })}
                    {arr2.map((e, i) => {
                        return (
                            <div key={i} className="map4 child">
                                <h3 className="mapchild bold">{e.name}</h3>
                                <p className="mapchild2">{e.description}</p>
                                <img className="mapchild3" src={e.img} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Cards5