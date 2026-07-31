export const getCloudinaryImageUrl = (url: string, width?: number) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  
  // Basic optimization params
  const optimizations = width 
    ? `f_auto,q_auto,w_${width},c_fill,g_auto`
    : `f_auto,q_auto,c_fill,g_auto`;

  // Insert transformations after /upload/
  return url.replace('/upload/', `/upload/${optimizations}/`);
};

export const getCloudinarySrcSet = (url: string) => {
  const widths = [640, 960, 1280, 1600, 1920, 2560];
  return widths.map(w => `${getCloudinaryImageUrl(url, w)} ${w}w`).join(', ');
};
