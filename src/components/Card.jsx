/* eslint-disable react/prop-types */
const Card = ({ children, bg }) => {
  const backgroundClass = bg || 'bg-gray-100';
  return (
    <div className={`${backgroundClass} p-6 rounded-lg shadow-md my-6`}>
      {children}
    </div>
  );
};

export default Card;