const RulesExtraInfo = () => {
  return (
    <div role="alert" className="alert">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0 stroke-info"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <p className="text-sm">
        <span className="font-semibold">Reminder: </span> Humble yourself—we are
        all students. You may only submit one original comment per day. Replies
        are not limited.
      </p>
    </div>
  );
};
export default RulesExtraInfo;