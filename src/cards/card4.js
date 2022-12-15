
function Cards4(){
    const arr=[
        {
            name: "Top-ranking suppliers",
            description:"well-made clothing with trendy designs",
            img: "https://s.alicdn.com/@sc04/kf/H705086e6e43a4a6292c855b554de7303e.jpg_220x220.jpg",
        },
        {
            name: "Top sales",
            description:"Socks & Hosiery",
            img: "https://s.alicdn.com/@sc04/kf/H975600bb0a9b40c29d7eba1a65fb10faa.jpg_220x220.jpg",
        },
        {
            name: "Ethnic Clothing",
            img: "https://s.alicdn.com/@sc04/kf/UTB8lhBLfXfJXKJkSamHq6zLyVXaL.jpg_220x220.jpg",
        },
        {
            name: "Noveltry & Special Use",
            img: "https://s.alicdn.com/@sc04/kf/HTB1IgznatfvK1RjSspoq6zfNpXaS.jpg_220x220.jpg",
        },
    ]
        const arr2 =[
        {
            name: "Deliverered Duty Paid(DDP)",
            description:"shipping & import duties included",
            img: "https://s.alicdn.com/@sc04/kf/Hfc8b3388df8544d396b4045401f5148eD.jpg_220x220.jpg",
        },
        {
            name: "Men's Clothing",
            description:"Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/Ha3a69a31041746c0862428ed2d4adcb7h.jpg_220x220.jpg",
        },
        {
            name: "Socks & Hosiery",
            description:"Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/HTB1aILNaUrrK1RkSne1q6ArVVXaT.jpg_220x220.jpg",
        },
        {
            name: "Sportswear",
            description:"Customization service available",
            img: "https://s.alicdn.com/@sc04/kf/H1a0490727de843da83a3f276f8f5d0a6w.png_220x220.png",
        },
    ]
    return(
        <div className="map">
            <div className="CONSUMER">
                <h2 class="headerTitle">APPAREL</h2>
                <span></span>
                <div class="label"></div>
                </div>
            <div className="map2">
            <div className="mapimg">
                <img src="	https://img.alicdn.com/tfs/TB1ZXXNIgHqK1RjSZFkXXX.WFXa-300-320.jpg"/>
            </div>
            <div className="map5">
            {arr.map((e,i)=>{
                return(
                    <div key={i} className="map3 child">
                       <h3 className="mapchild bold">{e.name}</h3>
                        <p className="mapchild2">{e.description}</p>
                        <img className="mapchild3" src={e.img}/>
                    </div>
                )
            })} 
            {arr2.map((e,i)=>{
                return(
                    <div key={i} className="map4 child">
                       <h3 className="mapchild bold">{e.name}</h3>
                        <p className="mapchild2">{e.description}</p>
                        <img className="mapchild3" src={e.img}/>
                    </div>
                )
            })} 
            </div>
            </div>
        </div>
    )
}
export default Cards4