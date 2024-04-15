// Import necessary types
import { CommentType } from "./types";

const dummyComments: CommentType[] = [
  {
    id: 1,
    text: "I love you",
    version: "kjv",
    reactions: ["smile", "love", "cross"],
    reports: [],
    upvotes: [],
    downvotes: [],
    author: {
      id: 1,
      name: "CJ",
      image: "/profile.jpg",
      email: "cwilsonfun@gmail.com",
      comments: [],
      isAdmin: true,
    },
    authorId: 1,
    discussion: {} as any, // Placeholder for discussion
    discussionId: 1,
    parentCommentId: null,
    parentComment: {} as any, // Placeholder for parent comment
    replies: [
      {
        id: 1,
        text: "I love you",
        version: "kjv",
        reactions: ["smile", "love", "cross"],
        reports: [],
        upvotes: [],
        downvotes: [],
        author: {
          id: 1,
          name: "CJ",
          image: "/profile.jpg",
          email: "cwilsonfun@gmail.com",
          comments: [],
          isAdmin: true,
        },
        authorId: 1,
        discussion: {} as any, // Placeholder for discussion
        discussionId: 1,
        parentCommentId: null,
        parentComment: {} as any, // Placeholder for parent comment
        replies: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    text: "I love you",
    version: "kjv",
    reactions: ["smile", "love", "cross"],
    reports: [],
    upvotes: [],
    downvotes: [],
    author: {
      id: 1,
      name: "CJ",
      image: "/profile.jpg",
      email: "cwilsonfun@gmail.com",
      comments: [],
      isAdmin: true,
    },
    authorId: 1,
    discussion: {} as any, // Placeholder for discussion
    discussionId: 1,
    parentCommentId: null,
    parentComment: {} as any, // Placeholder for parent comment
    replies: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    text: "I love you",
    version: "kjv",
    reactions: ["smile", "love", "cross"],
    reports: [],
    upvotes: [],
    downvotes: [],
    author: {
      id: 1,
      name: "CJ",
      image: "/profile.jpg",
      email: "cwilsonfun@gmail.com",
      comments: [],
      isAdmin: true,
    },
    authorId: 1,
    discussion: {} as any, // Placeholder for discussion
    discussionId: 1,
    parentCommentId: null,
    parentComment: {} as any, // Placeholder for parent comment
    replies: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default dummyComments;
