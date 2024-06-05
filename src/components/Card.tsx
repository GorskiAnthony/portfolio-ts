import profile from "../assets/profile.png";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

interface CardProps {
	name: string;
	title: string;
	social: {
		github: string;
		twitter: string;
		email: string;
		youtube: string;
	};
}

const Card: React.FC<CardProps> = ({
	name,
	title,
	social: { github, twitter, email, youtube },
}) => {
	return (
		<div className="w-full">
			<div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
				<div className="relative inline-block">
					<img
						className="w-32 mx-auto shadow-xl rounded-full"
						src={profile}
						alt="Profile face"
					/>
					<span className="absolute bottom-0 right-0 block -translate-x-[85px] -translate-y-1 transform rounded-full border-2 border-white">
						<span className="relative flex">
							<span className="block h-4 w-4 rounded-full bg-red-500 absolute" />
							<span className="block h-4 w-4 rounded-full bg-red-500 animate-ping" />
						</span>
					</span>
				</div>
				<div className="text-center mt-5">
					<p className="text-xl sm:text-2xl font-semibold text-gray-900">
						{name}
					</p>
					<p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
						{title}
					</p>
					<div className="flex align-center justify-center mt-4">
						<a
							className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
							href={github}
						>
							<FaGithub />
							<span className="sr-only">Github</span>
						</a>
						<a
							className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
							href={twitter}
						>
							<FaXTwitter />
							<span className="sr-only">Twitter</span>
						</a>
						<a
							className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
							href={
								"https://mail.google.com/mail/?view=cm&fs=1&to=" +
								email
							}
						>
							<FaRegEnvelope />
							<span className="sr-only">Email</span>
						</a>
						<a
							className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 rounded-full hover:text-white transition-colors duration-300"
							href={youtube}
						>
							<FaYoutube />
							<span className="sr-only">Youtube</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
