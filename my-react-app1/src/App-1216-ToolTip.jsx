
import { useEffect } from "react";
import $ from 'jquery';
import "./style-ToolTip-1216.css";

export default function App() {

    //ToolTip顯示說明

    useEffect(() => {
        //滑鼠移入 => mouseover()
        //滑鼠移出 => mouseout()
        //滑鼠移動 => mousemove()
        // X、Y 座標 => pageX、pageY
        //取得HTML內容 => html()
        //淡入 => fadeIn() || 淡出 => fadeOut() 
        //速度 => 毫秒 => (slow, normal, fast)
        //新增html元素 =>append()
        //取得子元素 => children()
        //尋找指定的名稱 => has()  a標籤 有沒 .ttpShow類別

        $('a:has(.ttpShow)').on('mouseover', function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
            $('#ttpPanel').css({
                top: (e.pageY + 20) + 'px',
                left: (e.pageX + 20) + 'px'
            }).fadeIn('fast');

        }).on('mouseout', function () {
            $('#ttpPanel').remove();

        }).on('mousemove', function (e) {
            $('#ttpPanel').css({
                top: (e.pageY + 20) + 'px',
                left: (e.pageX + 20) + 'px'
            });
        })

        //舊寫法
        // $('a:has(.ttpShow)').mouseover(function (e) {
        //   $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
        //   $('#ttpPanel').css({
        //     top: (e.pageY + 20) + 'px',
        //     left: (e.pageX + 20) + 'px'
        //   }).fadeIn('fast');

        // }).mouseout(function (e) {
        //   $('#ttpPanel').remove();
        // }).mousemove(function (e) {
        //   $('#ttpPanel').css({
        //     top: (e.pageY + 20) + 'px',
        //     left: (e.pageX + 20) + 'px'
        //   });
        // })
    }, [])

    return (
        <>
            <h2>ToolTip顯示說明</h2>
            <p>
                Lorem ipsum dolor sit amet
                &nbsp;
                <a href="#">
                    consectetur
                    <span className="ttpShow">consectetur的內容說明...</span>
                </a>
                &nbsp;
                adipisicing elit. Molestias ducimus laborum
                &nbsp;
                <a href="#">
                    doloremque
                    <span className="ttpShow"> doloremque的內容說明...</span>
                </a>
                &nbsp;
                doloremque itaque commodi quia tempore corrupti soluta consequuntur distinctio blanditiis nostrum facere, fugit voluptatibus incidunt officiis cumque nam error suscipit corporis repudiandae. Sit voluptas nisi fugiat rerum neque ab, laudantium provident? Exercitationem magnam corrupti molestias excepturi alias eum inventore iure tempore, vel voluptatibus placeat corporis laborum hic doloremque, ea sit dolorum. Nulla, unde ea maxime aperiam illum at soluta enim quia incidunt eaque magnam in blanditiis nisi voluptatum deleniti voluptatibus nihil inventore sed dolores possimus. Mollitia doloribus harum tempora ullam dolores quidem, in nostrum maiores ratione nesciunt, illum recusandae.
            </p>
        </>
    )
}
