const FeaturesList = () => {
  // SVG Icon Components
  const MapPin = ({ size = 24, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const Star = ({ size = 24, className = "", filled = false }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

const trendingFeatures = [
  { name: "Community", place: "Connect & Educate", rating: 4.8, reviews: 128, link: "https://images.unsplash.com/photo-1557856414-069ce8796ec9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Adopt", place: "Find Loving Homes", rating: 4.7, reviews: 96, link: "https://images.unsplash.com/photo-1700406904426-b4e4ac5f0bb0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Map", place: "Locate Rescue Zones", rating: 4.9, reviews: 215, link: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzOTV8MHwxfHNlYXJjaHwxMHx8bWFwfGVufDB8fHx8MTc1OTkxNzMxOXww&ixlib=rb-4.1.0&q=80&w=400" },
  { name: "Emergency", place: "Immediate Assistance", rating: 4.6, reviews: 182, link: "https://images.unsplash.com/photo-1531132089310-f0e1e64bf85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzOTV8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBFbWVyZ2VuY3l8ZW58MHx8fHwxNzU5OTE3NjExfDA&ixlib=rb-4.1.0&q=80&w=400" }
];
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-gray-500 tracking-wide uppercase mb-2">
            Features
          </h2>
          <p className="text-3xl font-bold text-grey-900">
            What's the main features we offer
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trendingFeatures.map((dish, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Dish Image */}
              <img
                src={dish.link}
                alt={dish.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5YzlkYWEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';
                }}
              />

              {/* Bottom Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                <h3 className="text-white text-lg font-bold truncate">{dish.name}</h3>
                <p className="text-white/80 text-sm flex items-center truncate">
                  <MapPin size={14} className="mr-1 flex-shrink-0" />
                  {dish.place}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  {/* Rating */}
                  <div className="flex items-center">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          filled={i < Math.floor(dish.rating)}
                          className={i < Math.floor(dish.rating) ? "text-amber-400" : "text-gray-600"}
                        />
                      ))}
                    </div>
                    <span className="ml-1 text-xs font-medium text-white">
                      {dish.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-[11px] text-white/70">
                    {dish.reviews} reviews
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;