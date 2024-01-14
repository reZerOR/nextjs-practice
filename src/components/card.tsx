const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-24 m-4 shadow-xl border border-[#ddd] flex justify-center items-center">
      {children}
    </div>
  );
};
export default Card;
