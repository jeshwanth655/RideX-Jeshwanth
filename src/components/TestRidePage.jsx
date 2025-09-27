import { useState } from 'react';

const TestRidePage = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [rideType, setRideType] = useState('standard');
  const [passengers, setPassengers] = useState(1);
  const [scheduledTime, setScheduledTime] = useState('');
  const [isBooking, setIsBooking] = useState(false);

  const rideTypes = [
    { id: 'economy', name: 'Economy', price: '$8-12', time: '3-5 min', icon: '🚗' },
    { id: 'standard', name: 'Standard', price: '$12-18', time: '2-4 min', icon: '🚙' },
    { id: 'premium', name: 'Premium', price: '$20-28', time: '4-6 min', icon: '🚘' },
    { id: 'xl', name: 'RideX XL', price: '$18-25', time: '3-7 min', icon: '🚐' }
  ];

  const handleBookRide = async () => {
    if (!pickup || !destination) {
      alert('Please enter both pickup and destination locations');
      return;
    }

    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      alert('Ride booked successfully! Your driver will arrive shortly.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Book Your Ride</h1>
          <p className="text-gray-600">Fast, reliable, and affordable transportation</p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Trip Details</h2>
            
            <div className="space-y-4">
              {/* Pickup Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  📍 Pickup Location
                </label>
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Enter pickup address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🎯 Destination
                </label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Passengers and Schedule */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    👥 Passengers
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} passenger{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ⏰ Schedule (Optional)
                  </label>
                  <input
                    type="datetime-local"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Ride Options */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Choose Your Ride</h2>
            
            <div className="space-y-3">
              {rideTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setRideType(type.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                    rideType === type.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{type.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-800">{type.name}</h3>
                        <p className="text-sm text-gray-600">{type.time} away</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">{type.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Book Button */}
            <button
              onClick={handleBookRide}
              disabled={isBooking}
              className={`w-full mt-6 py-4 px-6 rounded-xl font-semibold text-white transition-all ${
                isBooking
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
              }`}
            >
              {isBooking ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Booking Your Ride...</span>
                </div>
              ) : (
                'Book Ride Now'
              )}
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-800 mb-2">Fast Pickup</h3>
              <p className="text-gray-600 text-sm">Average pickup time under 5 minutes</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-gray-800 mb-2">Safe & Secure</h3>
              <p className="text-gray-600 text-sm">All drivers are background checked</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibent text-gray-800 mb-2">Fair Pricing</h3>
              <p className="text-gray-600 text-sm">No surge pricing, transparent costs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestRidePage;