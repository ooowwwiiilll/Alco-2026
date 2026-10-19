export const EmptyState = ({
  headline,
  subheadline,
  imageSrc,
}: {
  headline: string;
  subheadline: string;
  imageSrc: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-20 px-4">
      <div className="mb-6">
        <img src={imageSrc} alt="Empty state" className="w-48 h-48 object-contain grayscale" />
      </div>
      <h2
        style={{
          color: '#FFF',
          fontFamily: "'Season Mix', serif",
          fontSize: '27px',
          fontStyle: 'normal',
          fontWeight: 420,
          lineHeight: 'normal',
        }}
        className="mb-2"
      >
        {headline}
      </h2>
      <p
        style={{
          color: '#6E6E6E',
          textAlign: 'center',
          fontFamily: "'Season Sans', sans-serif",
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        }}
      >
        {subheadline}
      </p>
    </div>
  );
};
