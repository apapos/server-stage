export const useConfig = (extraParams?) => {
    return {
        base_url: 'https://tmdb.coovee.org',
        params: {
            // 'language': 'zh-CN',
            ...extraParams
        }
    }
}
