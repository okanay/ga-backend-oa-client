type NewPageButtonProps = React.FC<{
  handlePageAdd: () => void;
}>;

export const AddNewPageButton: NewPageButtonProps = ({ handlePageAdd }) => {
  return (
    <div
      className={"flex h-full translate-y-[-5%] items-center justify-center"}
    >
      <button
        className="flex size-6 items-center justify-center rounded-full text-xl transition-colors duration-300 hover:bg-flower-100"
        onClick={handlePageAdd}
      >
        <span>+</span>
      </button>
    </div>
  );
};
