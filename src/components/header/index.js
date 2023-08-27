const Header = () => {
    return (
        <header className="bg-white px-12 py-3 border-b border-[#CFCFCF] fixed top-0 left-0 w-full z-30">
            <div className="flex justify-between">
                <div>
                    <img src="/img/dark_logo.png" alt="logo" className="w-44" />
                </div>
                <div className="w-14 h-14">
                    <img src="/img/profile1.png" alt="profile" />
                </div>
            </div>
        </header>
    )
}
export default Header;