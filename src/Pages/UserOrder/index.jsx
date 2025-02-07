import { useEffect, useState } from "react";
import { Button } from "../../Components/Button/index.jsx";
import { Container } from "./styles.js";
import { api } from "../../Services/api.js";
import { CiCircleRemove } from "react-icons/ci";

export function UserOrder() {
  const [dishesId, setDishesId] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [isOrderEmpty, setIsOrderEmpty] = useState(true);
  const [orders, setOrders] = useState([]);
  const [notes, setNotes] = useState();

  function updateDishes() {
    const storedDishes = sessionStorage.getItem("@foodexplorer:id.dishes");
    if (storedDishes) {
      const parsedDishes = JSON.parse(storedDishes);
      setDishesId(parsedDishes);
      setIsOrderEmpty(parsedDishes.length === 0);
    } else {
      setDishesId([]);
      setIsOrderEmpty(true);
    }
  }

  async function getDishes(dishesId) {
    if (!dishesId || dishesId.length === 0) {
      setDishes([]);
      return;
    }

    try {
      const dishesData = await Promise.all(
        dishesId.map(async (dish) => {
          const response = await api.get(`/dish/${dish.id}`);
          return { ...response.data, quantity: dish.quantity };
        })
      );
      setDishes(dishesData);
    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
    }
  }

  function removeDish(idDish) {
    const updatedDishes = dishes.filter((dish) => dish.id !== idDish);
    setDishes(updatedDishes);

    const updatedDishesId = dishesId.filter((dish) => dish.id !== idDish);
    sessionStorage.setItem(
      "@foodexplorer:id.dishes",
      JSON.stringify(updatedDishesId)
    );
    setDishesId(updatedDishesId);
    setIsOrderEmpty(updatedDishesId.length === 0);

    window.dispatchEvent(new Event("storage"));
  }

  async function createOrder(status) {
    if (isOrderEmpty) {
      alert("Não é possível finalizar ou cancelar um pedido vazio.");
      return;
    }

    try {
      const response = await api.post("/orders", { status, notes });

      if (status === 2 || status === 5) {
        sessionStorage.removeItem("@foodexplorer:id.dishes");
        setDishesId([]);
        setDishes([]);
        setIsOrderEmpty(true);

        window.dispatchEvent(new Event("storage"));

        // Atualiza a lista de pedidos após finalizar o pedido
        await getOrdersByUser();
      }

      const order_id = response.data.order.id;

      const dishesToSend = dishesId.map((dish) => ({
        order_id: order_id,
        dish_id: dish.id,
        quantity: dish.quantity,
      }));

      await api.post("/ordersDishes", { order_id, dishes: dishesToSend });

      // Atualiza o estado `orders` com o novo pedido
      const newOrder = {
        id: order_id,
        status_name: status === 2 ? "Finalizado" : "Cancelado",
        order_total: totalOrder,
        notes: notes,
        created_at: new Date().toISOString(),
      };

      setOrders((prevOrders) => [...prevOrders, newOrder]);

      setNotes("");
    } catch (error) {
      console.error(error);
    }
  }

  async function getOrdersByUser() {
    try {
      const response = await api.get("/orders/byUser");
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    }
  }

  const totalOrder = dishes.reduce((total, dish) => {
    return total + dish.price * dish.quantity;
  }, 0);

  useEffect(() => {
    updateDishes();
    getOrdersByUser();
  }, []);

  useEffect(() => {
    getDishes(dishesId);
  }, [dishesId]);

  return (
    <>
      <Button />
      <Container>
        <table className="containerCards">
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {dishes.length > 0 ? (
              dishes.map((dish) => (
                <tr key={dish.id} className="trOrder">
                  <td>
                    <img
                      className="imageFavorite"
                      src={`${api.defaults.baseURL}/files/${dish.img_dish}`}
                      alt="imagem dish"
                    />
                  </td>
                  <td>
                    <h3>{dish.name}</h3>
                  </td>
                  <td>
                    <p className="description">{dish.description}</p>
                  </td>
                  <td>
                    <p>{dish.quantity}</p>
                  </td>
                  <td>
                    <span>R$: {dish.price.toFixed(2)}</span>{" "}
                  </td>
                  <td>
                    <div
                      className="removeDish"
                      onClick={() => removeDish(dish.id)}
                    >
                      Remover <CiCircleRemove />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="noFavorites">
                  Nenhum prato no pedido
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="containerFinishedOrder">
          <input
            type="text"
            name="notes"
            id="notes_use"
            placeholder="Digite algo no pedido"
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          />
          <div
            className="buttonFinish"
            onClick={() => {
              createOrder(2);
            }}
            style={{
              pointerEvents: isOrderEmpty ? "none" : "auto",
              opacity: isOrderEmpty ? 0.5 : 1,
            }}
          >
            Finalizar pedido
          </div>
          <div
            className="buttonCancel"
            onClick={() => {
              createOrder(5);
            }}
            style={{
              pointerEvents: isOrderEmpty ? "none" : "auto",
              opacity: isOrderEmpty ? 0.5 : 1,
            }}
          >
            Cancelar pedido
          </div>
          <span className="totalOrder">
            Total do pedido: R$ {totalOrder.toFixed(2)}
          </span>
        </div>

        <div className="order_status">
          <h2>Pedidos</h2>
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id} className="orderCard">
                <h2>Pedido: {order.id}</h2>
                <p>Status: {order.status_name}</p>
                <p>Total: R$ {order.order_total}</p>
                <p>
                  Nota do usuário:{" "}
                  {order.notes ? order.notes : "Nenhuma nota do usuário"}
                </p>
                <p>
                  Nota do administrador:{" "}
                  {order.admin_notes
                    ? order.admin_notes
                    : "Nenhuma nota do adm"}
                </p>
                <p>Data: {new Date(order.created_at).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>Nenhum pedido efetuado pelo usuário</p>
          )}
        </div>
      </Container>
    </>
  );
}