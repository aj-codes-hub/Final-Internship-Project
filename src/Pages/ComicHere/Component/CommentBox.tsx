import React, { useState } from 'react'
import { BiMessageRounded } from "react-icons/bi";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

type CommentType = {
  id: number;
  profileImg: string;
  name: string;
  userName: string;
  text: string;
  likes: number;
  comments: number;
  time: number;
  isLiked?: boolean;
  replies?: CommentType[];
};

const getTimeAgo = (time: number) => {
  const diff = Date.now() - time;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  return hours <= 0 ? "just now" : `${hours}h`;
};

const CommentBox: React.FC = () => {
  const [input, setInput] = useState("");
  const [activeReplyId, setActiveReplyId] = useState<number | null>(null);
  const [openReplies, setOpenReplies] = useState<number[]>([]);

  const [comments, setComments] = useState<CommentType[]>([
    {
      id: Date.now() + Math.random(),
      profileImg: "/Icons/UnknownPerson2.png",
      name: "Wanderer",
      userName: "@Lotus2051",
      text: "more power to you",
      likes: 20,
      comments: 1,
      time: Date.now(),
      replies: [
        {
          id: Date.now() + Math.random(),
          profileImg: "/Icons/UnknownPerson2.png",
          name: "Wanderer",
          userName: "@Lotus2051",
          text: "thank you",
          likes: 2,
          comments: 0,
          time: Date.now(),
        }
      ]
    },
    {
      id: Date.now() + Math.random(),
      profileImg: "/Icons/UnknownPerson2.png",
      name: "Wanderer",
      userName: "@Lotus2051",
      text: "more power to you",
      likes: 50,
      comments: 20,
      time: Date.now(),
      replies: [
        {
          id: Date.now() + Math.random(),
          profileImg: "/Icons/UnknownPerson2.png",
          name: "Wanderer",
          userName: "@Lotus2051",
          text: "thank you",
          likes: 2,
          comments: 0,
          time: Date.now(),
        }
      ]
    },
    {
      id: Date.now() + Math.random(),
      profileImg: "/Icons/UnknownPerson2.png",
      name: "Wanderer",
      userName: "@Lotus2051",
      text: "more power to you",
      likes: 10,
      comments: 4,
      time: Date.now(),
      replies: [
        {
          id: Date.now() + Math.random(),
          profileImg: "/Icons/UnknownPerson2.png",
          name: "Wanderer",
          userName: "@Lotus2051",
          text: "thank you",
          likes: 2,
          comments: 0,
          time: Date.now(),
        }
      ]
    }
  ]);

  const handleSubmit = () => {
    if (input.trim() === "") return;

    const newItem: CommentType = {
      id: Date.now() + Math.random(),
      profileImg: "/Icons/UnknownPerson2.png",
      name: "Wanderer",
      userName: "@Lotus2051",
      text: input,
      likes: 0,
      comments: 0,
      time: Date.now(),
      isLiked: false,
    };

    if (activeReplyId) {
      setComments(prev =>
        prev.map(c =>
          c.id === activeReplyId
            ? {
                ...c,
                comments: c.comments + 1,
                replies: [newItem, ...(c.replies || [])],
              }
            : c
        )
      );
      setActiveReplyId(null);
    } else {
      setComments([newItem, ...comments]);
    }

    setInput("");
  };

  const toggleReplies = (id: number) => {
    setOpenReplies(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleLike = (id: number, isReply = false, parentId?: number) => {
    setComments(prev =>
      prev.map(c => {
        if (!isReply && c.id === id) {
          return {
            ...c,
            likes: c.isLiked ? c.likes - 1 : c.likes + 1,
            isLiked: !c.isLiked,
          };
        }

        if (isReply && c.id === parentId) {
          return {
            ...c,
            replies: c.replies?.map(r =>
              r.id === id
                ? {
                    ...r,
                    likes: r.isLiked ? r.likes - 1 : r.likes + 1,
                    isLiked: !r.isLiked,
                  }
                : r
            ),
          };
        }

        return c;
      })
    );
  };

  return (
    <div className='relative max-h-[500px] h-full overflow-auto'>

      {comments.map(item => (
        <div key={item.id} className='mb-[16px]'>

          {/* Comment */}
          <div className='flex gap-[13px]'>
            <div className='h-[30px] w-[30px] rounded-full overflow-hidden'>
              <img src={item.profileImg} className='scale-[1.1]' />
            </div>
            <div>
              <div className='flex items-center h-[30px] gap-[13px]'>
                <h1 className='text-[15px] text-[#C0C0C0] font-bold'>{item.name}</h1>
                <p className='text-[15px] text-[#536471] flex items-center'>
                  <span>{item.userName}</span>
                  <span className='h-[2px] w-[2px] bg-[#536471] mx-[5px]' />
                  <span>{getTimeAgo(item.time)}</span>
                </p>
              </div>

              <h1 className='text-[15px] text-[#BFBFBF]'>{item.text}</h1>
            </div>
          </div>

          {/* Actions */}
          <div className='ml-[33px] flex gap-[24px] text-[#B0B0B0] text-[13px] mt-[16px]'>
            <button onClick={() => toggleLike(item.id)} className='flex gap-[14px]'>
              {item.isLiked ? <RiHeart3Fill size={22} className='text-[#33D6FF]' /> : <RiHeart3Line size={22} />}
              <span>{item.likes}</span>
            </button>

            <button onClick={() => {
              toggleReplies(item.id);
              setActiveReplyId(item.id);
            }} className='flex gap-[14px]'>
              <BiMessageRounded size={22} />
              <span>{item.comments}</span>
            </button>
          </div>

          {/* Replies */}
          {openReplies.includes(item.id) && item.replies?.map(reply => (
            <div key={reply.id} className='ml-[33px] mt-[14px]'>
              <div className='flex gap-[13px]'>
                <div className='h-[26px] w-[26px] rounded-full overflow-hidden'>
                  <img src={reply.profileImg} className='scale-[1.1]' />
                </div>

                <div>
                  <h1 className='text-[14px] text-[#BFBFBF]'>{reply.text}</h1>

                  <div className='flex gap-[20px] mt-[6px] text-[12px]'>
                    <button onClick={() => toggleLike(reply.id, true, item.id)} className='flex gap-[8px]'>
                      {reply.isLiked ? <RiHeart3Fill size={18} className='text-[#33D6FF]' /> : <RiHeart3Line size={18} />}
                      <span>{reply.likes}</span>
                    </button>

                    <button onClick={() => setActiveReplyId(item.id)} className='flex gap-[8px]'>
                      <BiMessageRounded size={18} />
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      ))}

      {/* Input */}
      <div className='sticky bottom-[2px]'>

        {activeReplyId && (
          <div className='ml-[20px] mb-[6px] text-[13px] text-[#536471] flex gap-2'>
            <span>Replying…</span>
            <button onClick={() => setActiveReplyId(null)} className='text-[#33D6FF]'>✕</button>
          </div>
        )}

        <input
          type='text'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (e.target.value === "") setActiveReplyId(null);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder={activeReplyId ? "Reply..." : "Comment..."}
          className='text-[#536471] bg-[#040914] text-[16px] rounded-full border border-[#536471] px-[25px] py-[16px] w-[99%] mx-[2px] font-semibold'
        />

        <button
          onClick={handleSubmit}
          className={`px-[20px] py-[7px] text-gray-500 right-[2%] bottom-3 absolute cursor-pointer ${input.trim() ? "opacity-[50%]" : "opacity-[0%]"}`}
        >
          <FaArrowRightLong size={22} />
        </button>

      </div>
    </div>
  );
};

export default CommentBox;
