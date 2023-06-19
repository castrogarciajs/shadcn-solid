import { MainNav } from "./main-nav"

export const SiteHeader = () => {
	return (
		<header class="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
			<div class="container flex h-14 items-center">
				<MainNav />
			</div>
		</header>
	)
}
