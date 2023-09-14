'use client'

import NextLink from "next/link";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import SplitType from 'split-type'
import { gsap } from "gsap"
import * as Logos from '../assets/home/importExport'
import './home.css'

export default function Home() {
	const [init, setInit] = useState<HTMLElement[] | null>(null);
	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		if (!init) {
			// split name, title and intro on landing page
			const name = SplitType.create('#name', {types: 'chars'})
			const title = SplitType.create('#title', {types: 'lines'})
			const intro = SplitType.create('#into', {types: 'chars'})

			console.log(name.chars, title.lines, intro.chars)

			setInit([name.chars, title.lines, intro.chars])
			
			// animation for each character of #name
			// if (name.chars) {
			// 	for (let i = 0; i < name.chars.length; i++) {
			// 		name.chars[i].classList.add('translate-y-full')
			// 	}
			// }
			
			gsap.to('.char', {
				y:0,
				stagger: 0.05,
				delay:0.2,
				duratioin: 0.5
			})

			// animation for each line of #title
			// if(title.lines){
			// 	for (let i=0; i < title.lines.length; i++){
			// 		title.lines[i].classList.add('translate-y-[115]')
			// 	}
			// }

			gsap.to('.line', {
				y:0,
				delay: 1
			})

			// animation for each char of #intro
			

			// SplitType.revert('#target')
		}
		console.log(init)
	}, [init, setInit]);

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center my-20">
				<h1 id='name' className={`${title({ color: "violet" })} text-violet-600 mb-16 z-40`}>
					Kylie Lang.
				</h1>
				<br/>
				<h1 id='title' className={`${title()}`}>
					Full Stack Software Developer.
				</h1>
				<h2 id='intro' className={`${subtitle({ class: "mt-4" })} mt-[50px]`}>
					Welcome to my portfolio.
				</h2>
			</div>
			<div className="w-full inline-flex flex-nowrap h-32">
				<ul className="h-32 flex items-center justify-center md:justify-start animate-infinite-scroll overflow-hidden">
					<li>
						<Image src={Logos.express_Logo} alt='express-logo'className="bg-transparent"/>
					</li>
					<li>
						<Image src={Logos.html_Js_Css_Logo} alt='html-logo'/>
					</li>
					<li>
						<Image src={Logos.js_Logo} alt='js-logo'/>
					</li>
					<li>
						<Image src={Logos.next_Logo} alt='next-logo'/>
					</li>
					<li>
						<Image src={Logos.node_Logo} alt='node-logo'/>
					</li>
					<li>
						<Image src={Logos.postresql_Logo} alt='postgresql-logo'/>
					</li>
					<li>
						<Image src={Logos.react_Logo} alt='react-logo'/>
					</li>
					<li>
						<Image src={Logos.tailwind_Logo} alt='tailwind-logo'/>
					</li>
				</ul>
				<ul className="flex items-center justify-center md:justify-start h-32 animate-infinite-scroll overflow-hidden">
					<li>
						<Image src={Logos.express_Logo} alt='express-logo'className="bg-transparent"/>
					</li>
					<li>
						<Image src={Logos.html_Js_Css_Logo} alt='html-logo'/>
					</li>
					<li>
						<Image src={Logos.js_Logo} alt='js-logo'/>
					</li>
					<li>
						<Image src={Logos.next_Logo} alt='next-logo'/>
					</li>
					<li>
						<Image src={Logos.node_Logo} alt='node-logo'/>
					</li>
					<li>
						<Image src={Logos.postresql_Logo} alt='postgresql-logo'/>
					</li>
					<li>
						<Image src={Logos.react_Logo} alt='react-logo'/>
					</li>
					<li>
						<Image src={Logos.tailwind_Logo} alt='tailwind-logo'/>
					</li>
				</ul>
			</div>
		</section>
	);
}
