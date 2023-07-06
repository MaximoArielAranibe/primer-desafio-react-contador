import { useState } from "react";
import "../css/ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };

  return (
    <div className="item-contador">
      <div className="item-contenedor">
				<button className="item-boton" onClick={restar} disabled={count <= 1}>-</button>
            <span className="item-cantidad">{count}</span>
        <button className="item-boton" onClick={sumar} disabled={count >= stock}>+</button>
			</div>

      <div className="boton-carrito-contenedor">
        <button
          className="boton-carrito"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
