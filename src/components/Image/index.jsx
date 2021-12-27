
export const getImageUrl = (source, width, height) => {
  const customSrc = `${image_url}/-${width ? `/${width}x` : ''}${height ||
    ''}/${image_host}${source}`;

  return customSrc;
};

function Img(props) {
  const {
    source,
    alt,
    className,
    width,
    height,
    mobileWidth,
    mobileHeight,
    pure = false,
    autoScale = false
  } = props;

  if (!source) {
    return null;
  }

  if (pure) {
    return (
      <img
        src={getImageUrl(source, width)}
        alt={alt || 'Site'}
        className={className}
      />
    );
  }

  if (!width && !height) {
    const src = getImageUrl(source);
    return (
      <picture>
        <img src={src} alt={alt || 'Site'} className={className} />
      </picture>
    );
  }

  // To check width and height from props
  const customSrc = `${image_url}/-${width ? `/${width}x` : ''}${height ||
    ''}/${image_host}${source}`;

  const customSrc2x = `${image_url}/-${width ? `/${width * 2}x` : ''}${height *
    2 || ''}/${image_host}${source}`;

  const mobileWidthCalc = mobileWidth || Number(Math.round(width / 2));

  const customMobileSrc = `${image_url}/-${
    mobileWidthCalc ? `/${mobileWidthCalc}x` : ''
  }${mobileHeight || ''}/${image_host}${source}`;

  const customMobileSrc2x = `${image_url}/-${
    mobileWidthCalc ? `/${mobileWidthCalc * 2}x` : ''
  }${mobileHeight * 2 || ''}/${image_host}${source}`;

  if (autoScale) {
    return (
      <picture>
        <source media="(min-width: 1024px)" srcSet={`${customSrc} 1x`} />
        <source media="(max-width: 1023px)" srcSet={`${customMobileSrc} 1x`} />
        <img src={customSrc} alt={alt || 'Site'} className={className} />
      </picture>
    );
  }

  return (
    <picture>
      <source
        media="(min-width: 1024px)"
        srcSet={`${customSrc} 1x, ${customSrc2x} 2x`}
      />
      <source
        media="(max-width: 1023px)"
        srcSet={`${customMobileSrc} 1x, ${customMobileSrc2x} 2x`}
      />
      <img src={customSrc} alt={alt || 'Site'} className={className} />
    </picture>
  );
}

export default Img;
