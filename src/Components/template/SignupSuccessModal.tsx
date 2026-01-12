import React, { useEffect } from 'react';

interface SignupSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupSuccessModal: React.FC<SignupSuccessModalProps> = ({ 
  isOpen, 
  onClose 
}) => {
  // Auto close after 3 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 100000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
        <div className={`fixed inset-0 overflow-y-auto z-50 overflow-hidden`}>
          
           <div className='bg-black/10 backdrop-blur inset-0 fixed'/>
    
          <div className='flex justify-center items-center min-h-screen p-4 relative z-50'>
            <div className='bg-[#1D212B] relative flex gap-4 transform transition-all rounded-[20px]'>
              <div className='flex sm:h-[334px] h-[334px] sm:w-[284px] w-[284px] items-center justify-center'>

                  <img src="Images/LikeThumb.png"
                  className='h-[120px] w-[120px] '/>

               </div>
            </div>
          </div>
        </div>
  );
};

export default SignupSuccessModal;