import { HeartIcon } from "@heroicons/react/24/outline";

export default function Footer() {
	return (
		<footer className="bg-white mt-auto">
			<div className="mx-auto max-w-7xl px-6 py-12 flex items-center justify-center lg:px-8">
				<div className="mt-8 order-1 mt-0">
					<p className="text-center text-xs leading-5 text-gray-500 flex items-center">
						&copy; {new Date().getFullYear()}, fait avec{" "}
						<HeartIcon className="h-4 w-4 mx-1" /> Anthony Gorski.
						All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
