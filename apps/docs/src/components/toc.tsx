import type { Accessor, Component } from "solid-js"
import { For, createEffect, createSignal, onCleanup } from "solid-js"
import { A, useLocation } from "solid-start"

type TToc = {
	depth: number
	text: string
	slug: string
}

const getHeadingsFromToc = (tableOfContents: TToc[]) => {
	return tableOfContents.map(({ slug }) => {
		const el = document.getElementById(slug)

		if (!el) {
			return
		}

		const style = window.getComputedStyle(el)
		const scrollMt = parseFloat(style.scrollMarginTop) * 2

		const top = window.scrollY + el.getBoundingClientRect().top - scrollMt

		return { slug, top }
	})
}

const useCurrentSection = (tableOfContents: Accessor<TToc[] | undefined>) => {
	const [currentSection, setCurrentSection] = createSignal(
		tableOfContents()?.[0]?.slug
	)

	createEffect(() => {
		const toc = tableOfContents()

		if (toc == null || toc.length === 0) {
			return
		}

		const headings = getHeadingsFromToc(toc)

		const onScroll = () => {
			const top = window.scrollY
			let current = headings[0]?.slug

			for (const heading of headings) {
				if (heading == null) {
					continue
				}

				if (top >= heading.top) {
					current = heading.slug
				} else {
					break
				}
			}

			setCurrentSection(current)
		}

		window.addEventListener("scroll", onScroll, { passive: true })

		onScroll()

		onCleanup(() => {
			window.removeEventListener("scroll", onScroll)
		})
	})

	return currentSection
}

type Props = {
	toc: TToc[] | undefined
}

export const TableOfContents: Component<Props> = (props) => {
	const location = useLocation()

	const currentSection = useCurrentSection(() => props.toc)

	return (
		<aside class="space-y-2">
			<p class="font-medium">On This Page</p>
			<ul class="m-0 list-none">
				<For each={props.toc}>
					{(h) => (
						<li
							class="mt-0 pt-2"
							classList={{
								"pl-4": h.depth === 3,
							}}
						>
							<A
								href={`${location.pathname}#${h.slug}`}
								class="inline-block no-underline transition-colors hover:text-foreground"
								classList={{
									"font-medium text-foreground":
										h.slug === currentSection(),
									"text-muted-foreground":
										h.slug !== currentSection(),
								}}
							>
								{h.text}
							</A>
						</li>
					)}
				</For>
			</ul>
		</aside>
	)
}
