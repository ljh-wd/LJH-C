interface Props {
  children: String;
}

const PrimaryBtn = (props: Props) => {
  return (
    <button className="playfair bg-[#222] text-[#eee] uppercase px-7 py-3 rounded">
      {props.children}
    </button>
  );
};

export default PrimaryBtn;
