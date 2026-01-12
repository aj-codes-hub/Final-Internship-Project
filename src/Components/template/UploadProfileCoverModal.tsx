import React, { useState } from 'react';
import ModalContainer from './modalContainer';
import Button from '../layout/Button';
import { PiClockClockwise } from "react-icons/pi";


interface UploadProfileCoverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  onSkip: () => void;
}

const UploadProfileCoverModal: React.FC<UploadProfileCoverModalProps> = ({ 
  isOpen, 
  onClose, 
  onContinue,
  onSkip 
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleModalContinue = () => {
    if (selectedFile) {
      console.log('🖼️ Cover photo uploaded:', selectedFile);
    }
    onContinue();
  };

  return (
    <ModalContainer onClose={onClose}>
      <div className='flex sm:h-[712px] h-[582px] xl:w-[970px] lg:w-[870px] md:w-[650px] sm:w-[570px] w-[94vw] sm:px-[48px] px-[16px] py-[64px]'>
        <div className='relative w-full'>
          {/* Header */}
          <div className="flex justify-between items-start mb-[32px]">
            <div>
              <h1 className='sm:text-[25px] text-[22px] text-white sm:mb-[8px] mb-[6px]'>
                Upload profile Cover
              </h1>
              <p className='sm:text-[16px] text-[14px] text-[#5C6272] font-medium'>
                Upload a file from your device. Image should at least 1920px x 393px.
              </p>
            </div>
          </div>

          {/* File Upload Section */}
          <div className="mb-[40px]">
            {/* Upload Button */}
            <div className="mb-[40px]">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="profile-picture-upload"
                />
                <div className="flex items-center justify-center gap-3 w-[266px] h-[48px] rounded-full bg-[#2C313D] hover:bg-[#1e2024] transition-colors cursor-pointer">
                  <span className="text-[#D1D3D9] font-medium text-[16px]">
                    Select file
                   </span>
                </div>
              </label>
              {selectedFile && (
                <p className="text-[#5C6272] text-sm mt-2">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>

            {/* Cover Preview Container */}
            <div className="flex flex-col items-center">
              <div className={`w-full h-[150px] rounded-[20px] overflow-hidden bg-[#040914] flex items-center justify-center`}>
                {previewUrl ? (
                  <img 
                    src={previewUrl} 
                    alt="Cover preview" 
                    className="w-full h-full object-cover"
                  />
                ) : "" }
              </div>
            </div>
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
              title='Done'
              onClick={handleModalContinue}
              className='bg-[#33D6FF] hover:bg-[#2bc4eb] text-[#040914] text-[20px] font-semibold transition-colors rounded-full md:w-[374px] px-8 py-3'
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default UploadProfileCoverModal;