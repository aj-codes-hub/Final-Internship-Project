import React, { useState } from 'react';
import ModalContainer from './modalContainer';
import Button from '../layout/Button';
import { PiClockClockwise } from "react-icons/pi";

interface UserTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUserTypeSelect: (type: 'author' | 'user') => void;
}

const UserTypeModal: React.FC<UserTypeModalProps> = ({ 
  isOpen, 
  onClose, 
  onUserTypeSelect 
}) => {
  const [selectedType, setSelectedType] = useState<'author' | 'user' | null>(null);

  if (!isOpen) return null;

  const handleContinue = () => {
    if (selectedType) {
      // Call parent function to handle next modal
      onUserTypeSelect(selectedType);
    }
  };

  return (
    <ModalContainer onClose={onClose}>
      <div className='flex h-[712px] xl:w-[970px] lg:w-[870px] md:w-[650px] sm:w-[570px] w-[94vw] sm:px-[48px] px-[16px] py-[64px]'>
        <div className='relative'>
          <h1 className='text-[25px] text-white mb-[8px]'>
            User or author
          </h1>
          <p className='text-[16px] text-[#5C6272] font-medium mb-[40px]'>
            Choose how you will use StageComics
          </p>

          {/* Simple Selection Options */}
          <div className="mb-[40px]">
            {/* User Option */}
            <div 
              className="flex items-center py-2 cursor-pointer "
              onClick={() => setSelectedType('user')}
            >
               <div className={`w-[24px] h-[24px] rounded-full border-2 flex items-center justify-center p-[2px] mr-4 border-[#33D6FF]`}>
                <div className={`w-full h-full rounded-full ${selectedType === 'user' ? 'bg-[#33D6FF]' : 'bg-transparent'}`}/>
              </div>
              
              <h3 className="text-white text-[16px] font-medium">
                Become An User
              </h3>
            </div>

            {/* Author Option */}
            <div 
              className="flex items-center py-2 cursor-pointer"
              onClick={() => setSelectedType('author')}
            >
              <div className={`w-[24px] h-[24px] rounded-full border-2 flex items-center justify-center p-[2px] mr-4 border-[#33D6FF]`}>
                <div className={`w-full h-full rounded-full ${selectedType === 'author' ? 'bg-[#33D6FF]' : 'bg-transparent'}`}/>
              </div>
              
              <h3 className="text-white text-[16px] font-medium">
                Become An Author
              </h3>
            </div>
          </div>

          {/* Why Become An User Section */}
          <div className="mb-[40px] bg-[#181B24] p-[24px] rounded-[20px]">
            <h3 className="text-[#5C6272] text-[16px] font-medium mb-3">
              *Why Become An User
            </h3>
            <p className="text-[#5C6272] text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Tietue vitae semper turpis ligula vestibulum ut sed. Maecenas consequat enim viverra dui arcu eu nulla sagittis mus. Est velit dictum eu lacus semectus gravida mauris.
            </p>
          </div>

          <button 
            onClick={onClose}
            className='bg-transparent text-[#5C6272] sm:text-[20px] text-[16px] gap-2 flex items-center font-medium hover:text-[#818898] transition-colors absolute bottom-0 left-0 cursor-pointer'            
          >
            <span><PiClockClockwise size={35}/></span> Skip for now
          </button>
          
          <Button
            title='Continue'
            onClick={handleContinue}
            disabled={!selectedType}
            className={`${selectedType ? 'bg-[#33D6FF] hover:bg-[#2bc4eb]' : 'bg-[#5C6272] cursor-not-allowed'} 
                      text-[#040914] absolute bottom-0 right-0 text-[20px] font-semibold transition-colors rounded-full
                        md:w-[374px] px-8 py-3`}
          />
        </div>
      </div>
    </ModalContainer>
  );
};

export default UserTypeModal;