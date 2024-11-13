function ClassList() {
    const ClassListData = [
        {
            id: 1,
            img: "images/unity.jpg",
            alt: "unity5課程",
            title: "Unity",
            content: "Unity5Unity5Unity5",
            teacher: "Unity",
            classHr: "4",
            price: "1600",
            special_offer: "1200",
        },
        {
            id: 2,
            img: "images/gamesalad.jpg",
            alt: "gamesalad課程",
            title: "Gamesalad 2D 遊戲製作",
            content: "gamesaleadgamesalead",
            teacher: "gamesalead",
            classHr: "8",
            price: "3200",
            special_offer: "1600",
        },
        {
            id: 3,
            img: "images/gwd.jpg",
            alt: "gwd課程",
            title: "Google Web Design",
            content: "gwdgwdgwd",
            teacher: "google",
            classHr: "8",
            price: "3200",
            special_offer: "1600",
        },
    ]
    return (
        <>
            <div className="Class">
                {
                    ClassListData.map((item) => {
                        return (
                            //<>
                            <div className="list" key={item.id}>
                                <img src={item.img} alt={item.alt} />
                                <h2>{item.title}</h2>
                                <p className="p-blue">{item.content}</p>
                                <p>講師:{item.teacher}</p>
                                <p>影音課程時數:{item.classHr}小時</p>
                                <p><span className="span1">原價NT${item.price}</span><span className="span2">NT${item.special_offer}</span></p>
                                <button>付款上課去</button>
                            </div>
                            //</>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ClassList