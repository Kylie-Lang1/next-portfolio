export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="items-center justify-center gap-4 py-8 md:py-10 bg-slate-200 dark:bg-gray-900">
			<div className="text-center justify-center">
				{children}
			</div>
		</section>
	);
}
