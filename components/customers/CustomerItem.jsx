import { FaStar } from 'react-icons/fa';

const CustomerItem = ({ description, name, rating = 5 }) => {
  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
        size={16}
      />
    ));
  };

  return (
    <div className="mt-5 mx-4">
      <div className="p-6 bg-secondary text-white rounded-[5px] shadow-lg">
        <div className="flex items-center mb-3">
          <div className="flex space-x-1">
            {renderStars()}
          </div>
          <span className="ml-2 text-sm text-gray-300">({rating}/5)</span>
        </div>
        <p className="text-gray-100 leading-relaxed mb-4">&ldquo;{description}&rdquo;</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">{name}</span>
            <span className="text-sm text-gray-300">Müşteri</span>
          </div>
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerItem;
