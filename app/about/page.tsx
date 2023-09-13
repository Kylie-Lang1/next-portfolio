'use client'

import { title, subtitle } from "@/components/primitives";
import { IoIosSchool } from 'react-icons/io'
import { FaLaptopCode } from 'react-icons/fa'
import { ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import ProfileImg from '../../assets/Profile.jpg'

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>
				<div className="flex flex-row gap-x-4 mt-10">
					<section className="w-1/3">
						<Image src={ProfileImg} alt='profile-image' className="h-40 w-auto rounded-full m-auto my-6"/>
						<p className="px-10">I am an honors biology graduate with experience in small animal, emergency and specialty veterinary medicine, as well as youth education, communication and customer service.</p>
						<p className="px-10 mt-4">In prior experiences, I have shown an aptitude to multitask efficiently and a yearning to acquire new skills in order to undertake greater responsibilities.</p>
						<p className="mt-4 px-10">I am excited to apply my acquired skills, explore my creativity and continue learning new software developemnt skils to further my career.</p>
					</section>
					<section className="w-[30%]">
						<h2 className={subtitle()}>Education</h2>
						<div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl p-1">
							<div className="bg-white dark:bg-black h-full w-full rounded-2xl p-6 relative">
								<IoIosSchool className="text-yellow-400 w-9 h-9 bg-gray-500 rounded-full p-1 absolute left-3 top-3"/>
								<div className="px-5">
									<p><i>City College of New York with Macaulay Honors</i></p>
									<p className="mt-5"><i>BS in Biology (December 2019)</i></p>
									<p className="mt-4">Minors in Anthropology and Economics</p>
								</div>
							</div>
						</div>
						<div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl p-1 mt-5">
							<div className="bg-white dark:bg-black h-full w-full rounded-2xl p-6 relative">
								<FaLaptopCode className="text-yellow-400 w-9 h-9 bg-gray-500 rounded-full p-1 absolute left-3 top-3"/>
								<p><i>Pursuit Fellowship</i></p>
								<p className="px-5 mt-5">Certificate of Completion for <i>Full Stack Web Training</i> (June 2023)</p>
								<p className="mt-4">A year-long course in technical mastery, industry readiness, leadership and personal development</p>
							</div>
						</div>
					</section>
					<section className="w-1/3 px-6 ">
						<h2 className={subtitle()}>Experience</h2>
						<ScrollShadow className="h-[60%] w-full bg-gradient-to-r from-green-300 via-cyan-500 to-blue-500 rounded-2xl p-1">
							<div className="flex flex-col gap-8 text-left bg-white dark:bg-black h-[180%] w-full rounded-2xl">
								<div className="ml-16 mt-8 flex flex-col gap-y-5">
									<div>
										<h3>Veterinary Assistant Lv. II - Surgery</h3>
										<p>BluePearl Emergency & Specialty Animal Hospital</p>
										<p>Jun 2020 - Present</p>
									</div>
									<div>
										<h3>Enumerator</h3>
										<p>U.S. Census Bureau</p>
										<p>Aug 2020 - Oct 2020</p>
									</div>
									<div>
										<h3>Veterinary Assistant</h3>
										<p>145th Street Animal Hospital</p>
										<p>Aug 2016 - Mar 2020</p>
									</div>
									<div>
										<h3>Assitant Coordinator of Discovery Guide Program</h3>
										<p>WCS Queens Zoo</p>
										<p>Jun 2018 - Aug 2018</p>
									</div>
									<div>
										<h3>Sales Associate</h3>
										<p>American Eagle Outfitters</p>
										<p>Jun 2016 - Aug 2016</p>
									</div>
									<div>
										<h3>Assistant Tennis Coach</h3>
										<p>New York Junior Tennis & Learning</p>
										<p>Jun 2014 - Aug 2015</p>
									</div>
									<div>
										<h3>Volunteer Cater Server</h3>
										<p>Church of the Resurrection</p>
										<p>Oct 2012 - May 2014</p>
									</div>
								</div>
							</div>
						</ScrollShadow>
					</section>
				</div>
		</div>
	);
}
