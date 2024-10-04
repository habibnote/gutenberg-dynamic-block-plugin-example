import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import Article from './components/Article';
import Inspector from './inspector';

import '../assets/editor.scss';

export default function Edit(props) {
    //get attributes
    const { attributes } = props;
    const { color } = attributes;

    //Fetch posts with query
    const posts = useSelect((select) => {
        const query = {
            per_page: 3,
            order: 'desc',
            orderby: 'date',
        };

        return select(coreDataStore).getEntityRecords(
            'postType',
            'post',
            query
        );
    }, []);

    //Fetch All Featured Image Ids
    const featuredMediaIds = posts
        ? posts.map((post) => post.featured_media)
        : '';

    // Fetch all featured images
    const mediaItems = useSelect(
        (select) => {
            return featuredMediaIds
                ? featuredMediaIds.map((id) =>
                      select(coreDataStore).getMedia(id)
                  )
                : [];
        },
        [featuredMediaIds]
    );

    return (
        <>
            <Inspector {...props} />
            <div {...useBlockProps()}>
                <div className="latest-posts-wrapper">
                    {posts &&
                        posts.map((post, index) => (
                            <Article
                                index={index}
                                post={post}
                                mediaItems={mediaItems}
                                color={color}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}
