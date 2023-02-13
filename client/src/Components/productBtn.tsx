interface Props {
  children: String;
}

const ProductBtn = (props: Props) => {
  return (
    <button className="playfair tracking-wider bg-[#222] text-[#eee] text-sm uppercase px-3 py-1 rounded  transition hover:bg-transparent hover:text-[#222] hover:border hover:border-[#222] ">
      {props.children}
    </button>
  );
};

export default ProductBtn;
