interface Props {
  children: String;
}

const ProductSecondaryBtn = (props: Props) => {
  return (
    <button className="playfair tracking-wider bg-transparent text-[#222] uppercase px-7 py-1 rounded  transition hover:bg-transparent hover:text-[#222] hover:border hover:border-[#222] ">
      {props.children}
    </button>
  );
};

export default ProductSecondaryBtn;
