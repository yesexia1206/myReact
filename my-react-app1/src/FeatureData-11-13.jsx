function FeatureData() {
    const featureData = [
        {
            id: 1,
            title: "教學影音",
            desc: "教學影音教學影音教學影音教學影音教學影音教學影音教學影音",
        },
        {
            id: 2,
            title: "良性互動",
            desc: "良性互動良性互動良性互動良性互動良性互動良性互動良性互動",
        },
        {
            id: 3,
            title: "趨勢分享",
            desc: "趨勢分享趨勢分享趨勢分享趨勢分享趨勢分享趨勢分享趨勢分享",
        },
    ]
    return (
        <>
            {
                featureData.map((item) => {
                    return (
                        //<>
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                        //</>
                    )
                })
            }
        </>
    )
}

export default FeatureData