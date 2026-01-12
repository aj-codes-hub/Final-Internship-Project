import React, { useState, useEffect } from 'react';
import ModalContainer from './modalContainer';
import Button from '../layout/Button';
import { PiClockClockwise } from "react-icons/pi";
import AddSocialNetworks from '../template/AddSocialNetworks'
import { FaCaretDown } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

interface AboutYourselfModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  onSkip: () => void;
}

// Country data with country codes
const countries = [
  { code: 'BD', name: 'Bangladesh' },
  { code: 'US', name: 'United States' },
  { code: 'IN', name: 'India' },
  { code: 'PK', name: 'Pakistan' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'JP', name: 'Japan' },
  { code: 'CN', name: 'China' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'AE', name: 'UAE' },
  { code: 'EG', name: 'Egypt' },
  { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' },
  { code: 'BR', name: 'Brazil' },
  { code: 'KR', name: 'South Korea' },
  { code: 'RU', name: 'Russia' },
  { code: 'MX', name: 'Mexico' },
];

const AboutYourselfModal: React.FC<AboutYourselfModalProps> = ({ 
  isOpen, 
  onClose, 
  onContinue,
  onSkip 
}) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [city, setCity] = useState('');
  const [biography, setBiography] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [cityError, setCityError] = useState('');

  if (!isOpen) return null;

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    if (cityError) setCityError('');
  };

  const handleBiographyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBiography(e.target.value);
  };

  const handleModalContinue = () => {
    // Validate city
    if (!city.trim()) {
      setCityError('City name is required');
      return;
    }

    // Collect all data
    const userData = {
      country: selectedCountry,
      city: city.trim(),
      biography: biography.trim(),
    };

    console.log('📝 User profile data:', userData);
    
    // Call parent continue function
    onContinue();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.country-dropdown')) {
        setIsCountryDropdownOpen(false);
      }
    };

    if (isCountryDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isCountryDropdownOpen]);

  return (
    <ModalContainer onClose={onClose}>
      <div className='flex sm:h-[712px] h-[762px] xl:w-[970px] lg:w-[870px] md:w-[650px] sm:w-[570px] w-[94vw] sm:px-[48px] px-[16px] py-[64px]'>
        <div className='relative w-full'>
          {/* Header */}
          <div className="flex justify-between items-start mb-[32px]">
            <div>
              <h1 className='sm:text-[25px] text-[22px] text-white sm:mb-[8px] mb-[6px]'>
                About yourself
              </h1>
              <p className='sm:text-[16px] text-[14px] text-[#5C6272] font-medium'>
                Lorem ipsum dolor sit amet consectetur. Mattis aliquam pharetra pellentesque tortor volutpat sit sem.
              </p>
            </div>
          </div>

          {/* Country and City Inputs */}
          <div className="mb-[16px] sm:flex-row flex flex-col sm:gap-[30px] ">
            {/* Country Select */}
            <div className="mb-4 w-full">
              <label className='text-[#5C6272] text-[16px] font-medium my-[8px] block'>
                Select your Country
              </label>
              
              <div className="relative country-dropdown">
                <button
                  type="button"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="flex items-center justify-between w-full h-[48px] rounded-[10px] border border-[#5C6272] text-white pr-4 hover:border-[#33D6FF] transition-colors bg-[#040914]"
                >
                  <div className="flex items-center gap-[28px] h-full w-full">
                    {/* React Country Flag */}
                    <div className='border-r border-[#5C6272] h-full w-[54px] flex justify-center items-center'>
                    <ReactCountryFlag
                      countryCode={selectedCountry.code}
                      svg
                      style={{
                        width: '24px',
                        height: '18px',
                        borderRadius: '3px'
                      }}
                    />
                    </div>
                    <span className="text-white">{selectedCountry.name}</span>
                  </div>

                  <FaCaretDown 
                    size={22} 
                    className={`transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''} text-[#5C6272]`}
                  />
                </button>
                
                {/* Dropdown Menu */}
                {isCountryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-[#1D212B] rounded-[10px] shadow-lg z-50 overflow-hidden border border-[#5C6272]">
                    <div className="max-h-60 overflow-y-auto custom-scrollbar">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsCountryDropdownOpen(false);
                          }}
                          className={`flex items-center w-full px-4 py-3 text-white hover:bg-[#2a2f3d] transition-colors border-b border-gray-800 last:border-b-0 ${
                            selectedCountry.code === country.code ? 'bg-[#33D6FF]/10' : ''
                          }`}
                        >
                          {/* Country Flag */}
                          <ReactCountryFlag
                            countryCode={country.code}
                            svg
                            style={{
                              width: '24px',
                              height: '18px',
                              borderRadius: '3px',
                              marginRight: '12px'
                            }}
                            title={country.name}
                          />
                          <span className="text-gray-300">{country.name}</span>
                          {selectedCountry.code === country.code && (
                            <span className="ml-auto text-[#33D6FF]">✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* City Input */}
            <div className="mb-4 w-full">
              <label className='text-[#5C6272] text-[16px] font-medium my-[8px] block'>
                City name
              </label>
              <input
                type="text"
                placeholder="Chittagong"
                value={city}
                onChange={handleCityChange}
                className="w-full h-[48px] rounded-[10px] placeholder:text-[#5C6272] bg-transparent border border-[#5C6272] focus:bg-[#040914] text-white p-[15px] outline-none focus:outline-none focus:border-[#33D6FF] transition-colors"
              />
              {cityError && (
                <p className="text-red-400 text-sm mt-1 ml-1">{cityError}</p>
              )}
            </div>
          </div>

          {/* Add social network */}
          <div className="mb-[16px]">
            <h3 className="text-[#5C6272] text-[16px] font-medium mb-[8px]">
              Add social network
            </h3>

            <div className='sm:w-[308px]  w-[300px] '>
              <AddSocialNetworks />
            </div>
          </div>

          {/* Biography */}
          <div className="mb-[40px]">
            <h3 className="text-[#5C6272] text-[16px] font-medium mb-4">
              User/Author biography
            </h3>
            
            <textarea
              placeholder="Write your biography here..."
              value={biography}
              onChange={handleBiographyChange}
              rows={4}
              className="w-full rounded-[10px] placeholder:text-[#5C6272] bg-transparent border border-[#5C6272] focus:bg-[#040914] text-white p-[15px] outline-none focus:outline-none focus:border-[#33D6FF] transition-colors resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between">
            <button 
              onClick={onSkip}
              className='bg-transparent text-[#5C6272] sm:text-[20px] text-[16px] gap-2 flex items-center font-medium hover:text-[#818898] transition-colors cursor-pointer'
            >
              <span><PiClockClockwise size={35}/></span> Skip for now
            </button>
            
            <Button
              title='Continue'
              onClick={handleModalContinue}
              disabled={!city.trim()}
              className={`${city.trim() ? 'bg-[#33D6FF] hover:bg-[#2bc4eb]' : 'bg-[#5C6272] cursor-not-allowed'} 
                        text-[#040914] text-[20px] font-semibold transition-colors rounded-full md:w-[374px] px-8 py-3`}
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AboutYourselfModal;