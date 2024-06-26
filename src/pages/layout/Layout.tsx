import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Layout() {
	return (
		<>
			<Navbar />
			<main className="flex flex-col min-h-screen bg-gray-100">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-3xl">
						<Outlet />
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}

export default Layout;
