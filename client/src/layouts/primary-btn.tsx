interface Props {
  children: String;
}

const PrimaryBtn = (props: Props) => {
  return (
    <button className="playfair tracking-wider bg-[#222] text-[#eee] uppercase px-7 py-3 rounded hover:scale-105 transition">
      <a href="/shop">{props.children}</a>
    </button>
  );
};

export default PrimaryBtn;
