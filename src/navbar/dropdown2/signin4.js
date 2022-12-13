import { Menu, Dropdown, Button, Space } from 'antd';
function Signin4() {
    const menu = (
        <Menu>
            <Menu.Item>
                <div className="menu-item-div-p-login">
                    <p className="menu-item-div-p-login-p-1">you havent login.</p>
                    <button className="menu-item-div-p-login-p-2">please login.</button>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="logo-1">

            <div className="btnlogo">

                <Space direction="vertical">
                    <Space wrap>
                        <Dropdown overlay={menu} placement="bottomRight">
                            <Button>
                                <i className="fas fa-shopping-cart"></i>
                                <div className="span-flex-1">
                                    <span className="span-text-1">Cart</span>
                                </div>
                            </Button>
                        </Dropdown>
                    </Space>
                </Space>
            </div>
        </div>
    )
}
export default Signin4