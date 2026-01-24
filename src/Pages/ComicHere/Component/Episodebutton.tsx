import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ComicEpisode } from '../../../ComicData/ComicEpisode';

const Episodebutton: React.FC = () => {
  const navigate = useNavigate();
  const { episodeId } = useParams<{ episodeId?: string }>();

  const handleNavigateTo = (episodeId: string) => {
    navigate(`/ReadComic/${episodeId}`);
  }

  return ( 
    <div>
      {ComicEpisode.map((item) => {
        // ✅ Check karo kya yeh episode active hai
        const isActive = item.id === episodeId;
        
        return (
          <button 
            key={item.id}
            onClick={() => handleNavigateTo(item.id)}
            // ✅ Sirf yeh class change karo, baaki sab same rahega
            className={`
              border-t-[1px] border-b-[1px] flex gap-[31px] border-[#1D212B] 
              h-[98px] w-full hover:bg-[#1D212B] transform duration-300
              ${isActive ? 'bg-[#1D212B]' : ''} // ✅ Sirf active par background add karo
            `}
          >
            {/* ✅ Aapka original code - kuch nahi badlega */}
            <div className='h-[98px] w-[100px] overflow-hidden'>
              <img src={item.thumbnail} alt={`Episode ${item.episodeNumber}`}/>
            </div>

            <div className='h-[64px] flex flex-col justify-between my-auto'>
              <p className='text-[#A6A6A6] text-left text-[12px] font-semibold'>
                Episode {item.episodeNumber}
              </p>
              <h1 className='text-[#53DFFF] text-left text-[16px] font-semibold'>
                Episode {item.episodeNumber}
              </h1>

              <div className='flex items-center text-[#A6A6A6] text-[14px] font-thin'>
                <span>{item.uploadDate}</span>
                <span className='p-[1.6px] rounded-full mx-[6px] bg-[#A6A6A6]' />
                <span>{item.views}</span>
              </div>
            </div>
          </button>   
        );
      })}
    </div>
  )
}

export default Episodebutton