interface Props {
  children: String;
}

const SecondaryBtn = (props: Props) => {
  return (
    <button className="playfair tracking-wider bg-transparent text-[#222] uppercase px-7 py-3 rounded hover:scale-105 transition hover:bg-[#222] hover:text-[#eee] border border-[#222] ">
      {props.children}
    </button>
  );
};

export default SecondaryBtn;
