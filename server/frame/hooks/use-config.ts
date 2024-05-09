export const useConfig = (extraParams?) => {
    return {
        base_url: 'https://tmdb.ll526e.cn',
        params: {
            // 'language': 'zh-CN',
            ...extraParams
        }
    }
}