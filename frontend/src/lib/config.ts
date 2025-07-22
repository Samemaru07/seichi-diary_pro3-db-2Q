export const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000/api';

export const API_ENDPOINTS = {
    POSTS: {
        ALL: `${API_BASE_URL}/posts/get-all`,
        BY_ID: (id: string | number) => `${API_BASE_URL}/posts/${id}`,
        BY_TAG: (id: string | number) => `${API_BASE_URL}/posts/by-tag/${id}`,
        POPULAR: `${API_BASE_URL}/posts/popular`,
        LATEST: `${API_BASE_URL}/posts/latest`,
        LIKE: (id: string | number) => `${API_BASE_URL}/posts/${id}/like`,
        COMMENTS: (id: string | number) => `${API_BASE_URL}/posts/${id}/comments`,
        COMMENTS_REPLIES: (id: string | number) => `${API_BASE_URL}/posts/${id}/comments/replies`,
    },
    ANIMES: {
        BY_READ: (id: string | number) => `${API_BASE_URL}/animes/by-read?id=${id}`,
        BY_BLOG: (id: string | number) => `${API_BASE_URL}/animes/blog/${id}`,
        BY_PREFECTURE: (id: string | number) => `${API_BASE_URL}/animes/prefecture/${id}`,
    },
    TAGS: {
        ALL: `${API_BASE_URL}/tag`,
    },
} as const; 