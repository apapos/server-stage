type ExcludeKeys<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type ExtractKeys<T, K extends keyof T> = { [P in K]: T[P]; };

// 从对象中排除对应的key
export const omit = <T extends object, K extends keyof T>(obj: T, keys: K[]): ExcludeKeys<T, K> => {
  const result = {} as ExcludeKeys<T, K>;
  Object.entries(obj).forEach(([key, value]) => {
    if (!keys.includes(key as K)) {
      result[key as keyof ExcludeKeys<T, K>] = value;
    }
  });
  return result;
}


export const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): ExtractKeys<T, K> => {
  return keys.reduce((result, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const { [key]: value } = obj;
      result[key] = value;
    }
    return result;
  }, {} as ExtractKeys<T, K>);
}
