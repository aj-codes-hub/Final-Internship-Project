export interface Comic {
  id: string;
  title: string;
  StarRating: string[];
  description: string;
  smalldescription:string;
  authorImage: string;
  illustrationImage: string;
  mainCharacterImage: string;
  release:number;
  coverImage: string;
  backgroundLeft: string;
  backgroundRight: string;
  views: string;
  likes: string;
  ComicCommentsQuantity: number;
  comments: Comment[];
  status: 'ongoing' | 'completed' | 'hiatus';
  pdfBG:string;
  alternativeTitle?: string;
  subscribers: string;
  titleImage:string;
}

export interface Episode {
  id: string;
  comicId: string;
  views:string;
  thumbnail: string;
  episodeNumber: number;
  uploadDate: string;
  episodeLikes:string
  episodeComments: Comment[];
  commentsQuantity: number;
  pdfBackground: string;
  titleImage: string;
  pdfFile: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  text: string;
  timestamp: string;
  likes: number;
}