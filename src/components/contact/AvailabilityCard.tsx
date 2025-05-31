
import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { availability } from './contactData';

const AvailabilityCard = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-white to-accent/5 p-8 rounded-3xl border border-primary/20 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
          <Clock size={16} className="text-white" />
        </div>
        <h4 className="text-xl font-bold text-gray-900">Available For</h4>
      </div>
      
      <div className="space-y-4">
        {availability.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <item.icon size={18} className="text-accent flex-shrink-0" />
            <span className="text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-primary/20">
        <div className="flex items-center gap-2 text-primary">
          <MapPin size={16} />
          <span className="text-sm font-medium">Open to Global Remote Work</span>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCard;
