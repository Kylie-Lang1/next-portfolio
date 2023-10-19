export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center gap-4 py-8 md:py-10 bg-slate-200 dark:bg-gray-900 h-screen">
			<div className="inline-block text-center justify-center w-full">
				{children}
			</div>
		</section>
	);
}
