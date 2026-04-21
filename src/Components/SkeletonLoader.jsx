const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4 p-8">
      {/* Header skeleton */}
      <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
      
      {/* Content blocks */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/5"></div>
      </div>
      
      {/* Image placeholder */}
      <div className="h-48 bg-gray-300 rounded-lg w-full"></div>
      
      {/* Button skeleton */}
      <div className="h-10 bg-gray-300 rounded-full w-32 mx-auto"></div>
    </div>
  );
};

export default SkeletonLoader;