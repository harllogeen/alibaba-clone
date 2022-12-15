function Card2() {
    const arr = [
        {
            img: "	https://s.alicdn.com/@sc04/kf/H37e03d62429b4328b5b96940f8c84cc43.jpg_100x100xz.jpg",
        },
        {
            img: "	https://s.alicdn.com/@sc04/kf/HTB1HnWGX4_rK1RkHFqDq6yJAFXaq.jpg_100x100xz.jpg",
        },
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hc94fb171745e4a9f9efd584f16785c05Y.jpg_100x100xz.jpg",
        }
    ]
    const arr2 = [
        {
            img: "	https://s.alicdn.com/@sc04/kf/H9a2a2106bc4e45759ca95ba83492e0a1H.jpg_100x100xz.jpg",
        },
        {
            img: "	https://s.alicdn.com/@sc04/kf/H7d363ce53cc848efbf700141d4fcfc20B.jpg_100x100xz.jpg",
        },
        {
            img: " https://s.alicdn.com/@sc04/kf/H5b4f3057cfd746b0bfcb8163d02adb8bc.jpg_100x100xz.jpg",
        }
    ]
    const arr3 = [
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hfea7ad5c9b5d49d59d38172c5cf23377k.jpg_100x100xz.jpg",
        },
        {
            img: "https://s.alicdn.com/@sc04/kf/Ha76fbf7fcbfa4410b694985b89e117f5I.jpg_100x100xz.jpg",
        },
        {
            img: "	https://s.alicdn.com/@sc04/kf/Hbff6c043b495435fa5fb886c067c2e27d.jpg_100x100xz.jpg",
        }
    ]
    // },
    const arr4 = [

        {
            img: "https://s.alicdn.com/@sc04/kf/H3e6c1744ea094d20aacee09a5a5c50b8w.jpg_100x100xz.jpg",
        },
        {
            img: "https://s.alicdn.com/@sc04/kf/H224dcb809cea457baad1a97fe3050e62X.jpg_100x100xz.jpg",
        },
        {
            img: "https://s.alicdn.com/@sc04/kf/Hb070d7478e6d4cf1955e74fe48a8a6ceJ.jpg_100x100xz.jpg",
        }
    ]

    return (
        <div className="grid">
            <div className="grid2">
                <div className="grid8">
                    <h1>Customized products</h1>
                    <br />
                    <p className="gridp" >Partner with one of 60,000 experienced manufacturers with <br /> design & production capabilities</p>
                    <div className="grid6">
                        <div className="gridchild">
                            <h4>Premium OEM Factories</h4>
                            <div className="grid4">
                                {arr.map((e, i) => {
                                    return (
                                        <div className="grid7">
                                            <img className="ship2" key={i} src={e.img} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="gridchild">
                            <h4>Top-ranking suppliers</h4>
                            <div className="grid4">
                                {arr2.map((e, i) => {
                                    return (
                                        <div className="grid7">
                                            <img className="ship2" key={i} src={e.img} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid3">
                    <h1>Ready-to-ship products</h1>
                    <br />
                    <p className="gridp" >Source from 15 million products that are ready to ship,<br /> and leave the facility within 15 days.</p>
                    <div className="grid6">
                        <div className="gridchild2">
                            <h4>Fast Dispatch</h4>
                            <div className="grid4">
                                {arr3.map((e, i) => {
                                    return (
                                        <div className="grid7">
                                            <img className="ship2" key={i} src={e.img} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="gridchild2">
                            <h4>Weekly Deals</h4>
                            <div className="grid4">
                                {arr4.map((e, i) => {
                                    return (
                                        <div className="grid7">
                                            <img className="ship2" key={i} src={e.img} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2