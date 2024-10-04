import parse from 'html-react-parser';

export default function Article({ index, post, mediaItems, color }) {
    return (
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

                <h2 style={{ color: color }}>{post.title.rendered}</h2>
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
    );
}
