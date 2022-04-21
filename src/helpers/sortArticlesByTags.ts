export const sortArticlesByTags = (state: any, tag: any) => {
  return state.filter((item: any) => item.tags[0] === tag);
};
