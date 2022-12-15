import Card from '@mui/material/Card';

function Cards3() {
    const arr = [
        {
            name: "Top-ranking suppliers",
            description: "Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/H4f1ebd992bfa45b48d886e16a32740dc5.jpg_220x220.jpg",
        },
        {
            name: "Top Sales",
            description: "Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/H78781a3917ae4127bca74354f23243bc6.jpg_220x220.jpg",
        },
        {
            name: "VR, AR, MR Hardware & Software",
           
            img: "https://s.alicdn.com/@sc04/kf/Had25b31fe20a48ffba9eaafffb9632c3V.jpg_220x220.jpg",
        },
        {
            name: "Others Customer Electronics",
            description: "Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/HTB1.RcOX2WG3KVjSZFPq6xaiXXao.jpg_220x220.jpg",
        },
    ]
    const arr2 = [
        {
            name: "Deliverered Duty Paid(DDP)",
            img: "https://s.alicdn.com/@sc04/kf/H4a5517b17cf140cda5d5a5abed9b12e0G.jpg_220x220.jpg",
        },
        {
            name: "Computer Hardware & Software",
           
            img: "https://s.alicdn.com/@sc04/kf/HTB1NPCqB2uSBuNkHFqDq6xfhVXaH.jpg_220x220.jpg",
        },
        {
            name: "Video Games & Accessories",
            description: "Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/HTB1FrVsXODxK1RjSsphq6zHrpXad.jpg_220x220.jpg",
        },
        {
            name: "Mobile Phone & Accessories",
            description: "Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/HTB1qDcsXs_vK1RkSmRyq6xwupXaR.jpg_220x220.jpg",
        },
    ]
    return (
        <div className="map">
            <div className="CONSUMER">
                <h2 class="headerTitle">CONSUMER ELECTRONICS</h2>
                <span></span>
                <div class="label"></div>
            </div>
            <div className="map2">
                <div className="mapimg">
                    <img src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png" />
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
export default Cards3