import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { store as coreDataStore } from "@wordpress/core-data";
import parse from "html-react-parser";
import "./editor.scss";

export default function Edit() {
	//Fetch posts with query
	const posts = useSelect((select) => {
		const query = {
			per_page: 3,
			order: "desc",
			orderby: "date",
		};

		return select(coreDataStore).getEntityRecords("postType", "post", query);
	}, []);

	//Fetch All Featured Image Ids
	const featuredMediaIds = posts
		? posts.map((post) => post.featured_media)
		: "";

	// Fetch all featured images
	const mediaItems = useSelect(
		(select) => {
			return featuredMediaIds
				? featuredMediaIds.map((id) => select(coreDataStore).getMedia(id))
				: [];
		},
		[featuredMediaIds],
	);

	return (
		<div {...useBlockProps()}>
			<div className="latest-posts-wrapper">
				{posts &&
					posts.map((post, index) => (
						<>
							<article key={index} className="single-post">
								{mediaItems[index] && (
									<>
										<img
											src={mediaItems[index].source_url}
											alt={mediaItems[index].alt_text}
										/>
									</>
								)}

								<h2>{post.title.rendered}</h2>
								<div className="meta-data">
									<span>{post.date}</span>|
									<span>
										By <a href="#">Md. Habib</a>
									</span>
								</div>
								{parse(post.excerpt.rendered)}
								<div>
									<a href={post.link}>Read More</a>
								</div>
							</article>
						</>
					))}
			</div>
		</div>
	);
}
