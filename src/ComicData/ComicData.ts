import type { Comic } from './Types';

export const ComicData: Comic = {
  id: "comic_001",
  title: "The Mercenary",
  StarRating: [
    "/Icons/starFill.png",
    "/Icons/starFill.png",
    "/Icons/starFill.png",
    "/Icons/starFill.png",
    "/Icons/starFill.png",
  ],
  description: "At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land, forced to become a child mercenary in order to stay alive. He returns home ten years later to be reunited with his family in Korea, where food and shelter are plenty and everything seems peaceful. But Ijin will soon learn that life as a teenager is a whole other feat of survival......",
  smalldescription:"At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land, forced to become a child mercenary in order to stay alive...",
  authorImage: "./Images/Anime2.jpg",
  illustrationImage: "./Images/Anime2.jpg",
  mainCharacterImage: "/Images/AnimeCard2.png",
  release: 2023,
  coverImage: "/Images/ComicPage/CoverImage1.jpg",
  backgroundLeft: "/Images/ComicPage/bgImage1.jpg",
  backgroundRight: "/Images/ComicPage/bgImage2.jpg",
  views: "32 m",
  likes: "42 k",
  ComicCommentsQuantity: 17,
  comments: [
    {
      id: "comment_001",
      userId: "user_001",
      userName: "ComicFan",
      userAvatar: "/images/avatars/avatar1.jpg",
      text: "This comic is amazing!",
      timestamp: "2 hours ago",
      likes: 42
    }
  ],
  status: "ongoing",
  alternativeTitle: " F급 사주 헌터",
  pdfBG:"/Images/girl-with-long-black-hair.jpg",
  subscribers:   "61.5k ",
  titleImage:"/Images/Comic1Cover2.jpg",
};