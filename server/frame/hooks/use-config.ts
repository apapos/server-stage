export const useConfig = (extraParams?) => {
    return {
        base_url: 'https://relay-amber.vercel.app',
        params: {
            // 'language': 'zh-CN',
            ...extraParams
        }
    }
}