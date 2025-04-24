import Nav from "../Nav";

function Header() {
	return (
		<header className="pl-[15px] fixed left-0 right-0 z-[50] top-0 pr-[23px]  shadow-sm bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]">
			<Nav />
		</header>
	);
}

export default Header;
