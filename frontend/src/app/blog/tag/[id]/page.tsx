
import Link from 'next/link';
import { API_ENDPOINTS } from '@/lib/config';

// 記事型
type Post = {
    post_id: number;
    title: string;
    anime_name: string;
};

// タグ型
type Tag = {
    tag_id: string;
    tag_name: string;
};

// ISR用: 静的パス生成
export async function generateStaticParams(): Promise<{ id: string }[]> {
    // 環境変数でAPI取得をスキップ
    if (process.env.SKIP_API_FETCH === 'true') {
        return [
            { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' },
            { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: '10' }
        ];
    }

    // 本番環境では事前定義されたタグIDを使用
    if (process.env.NODE_ENV === 'production') {
        return [
            { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' },
            { id: '6' }, { id: '7' }, { id: '8' }, { id: '9' }, { id: '10' }
            // 実際のタグIDに置き換えてください
        ];
    }

    // 開発時のみAPIから取得
    try {
        // タイムアウト付きfetch
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3秒でタイムアウト

        const res = await fetch(API_ENDPOINTS.TAGS.ALL, {
            signal: controller.signal,
            next: { revalidate: 3600 }
        });

        clearTimeout(timeoutId);

        const data = await res.json();
        return data.tags.map((tag: Tag) => ({ id: String(tag.tag_id) }));
    } catch (error) {
        console.error('generateStaticParams error:', error);
        return [];
    }
}

type TagTopProps = { params: { id: string } };

const TagTop = async ({ params }: TagTopProps) => {
    const id = params.id;
    let posts: Post[] = [];
    try {
        const res = await fetch(API_ENDPOINTS.POSTS.BY_TAG(id), { next: { revalidate: 3600 } });
        const data = await res.json();
        posts = data.posts;
    } catch {
        posts = [];
    }

    return (
        <div>
            <div className="pageMain">
                <h1 className="pageTitle font-pageTitle text-[35px] mt-[30px]">記事一覧</h1>
            </div>
            <div>
                {posts.length === 0 ? (
                    <h3>まだブログはありません</h3>
                ) : (
                    posts.map((post) => (
                        <Link href={`/blog/${post.post_id}`} key={post.post_id} className="link" >
                            {post.title}（{post.anime_name}）
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default TagTop;