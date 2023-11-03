import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://vanphongxanh.vn/wp-content/uploads/2022/03/logo-social.png" />
            </div>
            <div className="icon-container">
                <div>
                    <p className="text">Handicrafted by</p>
                    <p>Nhật Hào</p>
                </div>
                <div className="icon">
                    <img src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Header;
