interface Props {
  children: String;
}

const ProductSecondaryBtn = (props: Props) => {
  return (
    <button className="playfair tracking-wider bg-transparent text-[#222] uppercase px-7 py-1 rounded hover:scale-105 transition hover:bg-transparent hover:text-[#eee] hover:border hover:border-[#222] ">
      {props.children}
    </button>
  );
};

export default ProductSecondaryBtn;
