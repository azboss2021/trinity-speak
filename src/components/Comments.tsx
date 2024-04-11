const comments = [
  {
    id: 1,
    text: "I hear the birds chirping...I appreciate this verse more than you could know.",
    version: "kjv",
    reactions: ["smile", "love", "cross"],
    reports: [],
    upvotes: [],
    downvotes: [],
    author: {
      id: 1,
      name: "CJ",
      email: "cwilsonfun@gmail.com",
      comments: [],
      isAdmin: true,
    },
    authorId: 1,
    discussion: {},
    discussionId: 1,
    parentCommentId: null,
    parentComment: {},
    replies: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

const Comments = () => {
  return <div>Comments</div>;
};
export default Comments;
