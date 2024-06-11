import logo from "../assets/logo.webp";

const navigation = [
	{
		id: 1,
		name: "tools",
		href: "https://generate-groups.netlify.app",
	},
];

function Navbar() {
	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<img
						className="w-16 h-16 rounded-lg object-cover object-center "
						src={logo}
						alt="logo"
					/>
					<span className="ml-3 text-xl">Portfolio</span>
				</a>
				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					{navigation.map((nav) => (
						<a
							key={nav.id}
							className="mr-5 hover:text-gray-900 hover:underline"
							href={nav.href}
						>
							{nav.name.toUpperCase()}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
