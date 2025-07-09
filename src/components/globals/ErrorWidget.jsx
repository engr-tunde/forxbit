const ErrorWidget = ({ error, color, className }) => {
  return (
    <div className={` w-full ${className}`} style={{ color }}>
      {error?.toString()}
    </div>
  );
};

export default ErrorWidget;
