function ShowCity() {

    return (
        <>
            {
                (async () => {
                    //本地端要在web-server伺服器下才可執行
                    // const data = await axios.get('./F-C0032-001.json');
                    //json的連結必須是公開網址下的來源
                    const data = await axios.get('https://yesexia1206.github.io/myReact/json/F-C0032-001.json');
                    //console.log(data);
                    const { location } = data.data.cwaopendata.dataset;
                    console.log(location);

                    location.map((city)=>{
                        return <div key={city.locationName}>{city.locationName}</div>
                    })
                })()
                //locationName =>縣市名
                //elementName => Wx =>天氣概況
                //elementName => PoP =>降雨率
            }
        </>
    )
}
export default ShowCity