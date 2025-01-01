import { FloatButton } from 'antd';
export default function Footers(){
    return(
        <div className="FootersDemo">
            <FloatButton.BackTop />
            <div className="container">
                <div className="demo1">
                    <ul>
                        <li><a href="https://beian.miit.gov.cn/" target="_">互联网ICP备案：豫ICP备123456号</a></li>
                        <li>Copyright © 2024 pizhecode 版权所有</li>
                    </ul>
                </div>

                <div className="demo2">
                    <img src="image/logo.png" alt="" />
                </div>
            </div>
        </div>
    )
}