interface Props {
  children: String;
}

const PrimaryBtn = (props: Props) => {
  return (
    <button className="playfair tracking-wider bg-[#222] text-[#eee] uppercase px-7 py-3 rounded-sm transition hover:bg-transparent hover:text-[#222] hover:border hover:border-[#222] ">
      {props.children}
    </button>
  );
};

export default PrimaryBtn;
