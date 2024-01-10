function Tariff(props) {
  const {
    index,
    header,
    currency,
    amount,
    price,
    option,
    note,
    isActive,
    onClick,
  } = props;

  const handleClick = () => {
    if (isActive !== index) {
      onClick(index);
    } else {
      onClick();
    }
  };

  let className = "tariff tariff__";
  className += "" + index;

  if (isActive === index) {
    className += " selected";
  }

  return (
    <div onClick={handleClick} className={className}>
      <h2 className="tariff__header">{header}</h2>
      <div className="tariff__price">
        <div className="tariff__amount">{amount}</div>
        <p className="tariff__currency">{currency}</p>
        <div className="tariff__period">{price}</div>
      </div>
      <div className="tariff__option">{option}</div>
      <div className="tariff__note">{note}</div>
    </div>
  );
}

export default Tariff;
