'use client'

import NextLink from "next/link";
import React, { useState, useEffect } from 'react';
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import SplitType from 'split-type'
import { gsap } from "gsap"

export default function Home() {
	const [init, setInit] = useState<HTMLElement[] | null>(null);
	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		if (!init) {
			const text = SplitType.create('#target')

			setInit(text.chars)
			
			if (text.chars) {
				for (let i = 0; i < text.chars.length; i++) {
					text.chars[i].classList.add('translate-y-full')
				}
			}
			
			gsap.to('.char', {
				y:0,
				stagger: 0.05,
				delay:0.02,
				duratioin: 0.5
			})

			// SplitType.revert('#target')
		}
		console.log(init)
	}, [init, setInit]);

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 id='target' className={`${title({ color: "violet" })} target text-violet-600`}>Kylie Lang.</h1>
				<br />
				<h1 className={`${title()} `}>
					Full Stack Software Developer.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Welcome to my portfolio.
				</h2>
			</div>
			<div>

			</div>
		</section>
	);
}
