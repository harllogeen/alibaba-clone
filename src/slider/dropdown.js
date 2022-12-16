import * as React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useState } from 'react';

function Dropdown1() {
    // state = {
    //     current: 'mail',
    //   };
    const arr = [
        "Camera,Photo & Accessories",
        "Action & Sports",
        "Camera",
        "Action & Sports Camera Accessory",
        "Baby & Pet Monitor",
        "Backgrounds",
        "Battery Grip",
        "Camera Filters",
        "Chargers,Batteries & Power Supplies",
        "Battery Accessories",
        "Battery Case",
        "Battery Charger",
        "Charger & Adapter",
        "Charging Stand & Holder",
        "Charging Station & Power Station",
        "Commonly Used Accessories & Parts",
        "Adapters & Connectors",
        "Cable",
        "Card Readers",
        "Cleaners",
        "Digital Lighters & Parts",
        "Electronic Organizers",
        "Computer Hardware & Software",
        "All in One Computers",
        "Blank Disks",
        "CPUs",
        "Computer Cases & Towers",
        "Desktops",
        "Fans & Cooling",
        "Electronic Cigarettes",
        "Box Mod",
        "Electronic Cigarette Accessories",
        "Heat not burn",
        "Herb Vaporizers",
        "Other Electronic Cigarettes",
        "Vape pen",
        "Earphone & Headphone",
        "Earphone Accessories",
        "Earphones & Headphones"
    ];
    const [current, setCurrent] = useState("mail");
    const { SubMenu } = Menu;

    const handleClick = (e) => {
        console.log('click ', e);
        // this.setState({ current: e.key });
    };

    return (
        <div className="handleclick-div drop-mneu-onclick">
            <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
                <img className="div-handlclick-menu-img--sub" src="./assets/consumer.png" />
                <SubMenu key="sub1" title="Consumer Electronics" >
                    {arr.map((e, i) => {
                        return (
                            <Menu.Item className={i} key={i}>{e}</Menu.Item>
                        )
                    })}
                </SubMenu>

            </Menu>

        </div>
    );
}

export default Dropdown1