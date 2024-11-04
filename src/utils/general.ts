export const getCdnUrl = (url: string): string => {
  return process.env.REACT_APP_ASSET_BASE_URL + url;
};
