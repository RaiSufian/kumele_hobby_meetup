const Header = () => {
    return (
        <header className="bg-white px-16 py-5 border-b border-[#CFCFCF]">
            <div className="flex justify-between">
                <div>
                    <img src="/img/dark_logo.png" alt="logo" className="w-48" />
                </div>
                <div className="w-14 h-14">
                    <img src="/img/profile1.png" alt="profile" />
                </div>
            </div>
        </header>
    )
}
export default Header;