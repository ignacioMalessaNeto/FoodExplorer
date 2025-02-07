import { useEffect, useState } from "react";
import { Button } from "../../Components/Button/index.jsx";
import { Container } from "./styles.js";
import { api } from "../../Services/api.js";

export function AdmOrder() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adminNotes, setAdminNotes] = useState({});
  const [orderStatuses, setOrderStatuses] = useState({});

  const handleNoteChange = (orderId, value) => {
    setAdminNotes((prev) => ({
      ...prev,
      [orderId]: value,
    }));
  };

  async function editOrder(idOrder) {
    const status =
      orderStatuses[idOrder] ?? orders.find((o) => o.id === idOrder)?.status;
    const admin_notes =
      adminNotes[idOrder] ?? orders.find((o) => o.id === idOrder)?.admin_notes;

    try {
      const response = await api.put(`orders/${idOrder}`, {
        status,
        admin_notes,
      });
      console.log("Pedido atualizado com sucesso:", response.data);
      getOrders(); // Atualizar a lista após editar
    } catch (error) {
      console.error(
        "Erro ao atualizar pedido:",
        error.response?.data || error.message
      );
    }
  }

  const handleStatusChange = (orderId, value) => {
    setOrderStatuses((prev) => ({
      ...prev,
      [orderId]: value,
    }));
  };

  async function getOrders() {
    setIsLoading(true);
    try {
      const response = await api.get("/orders");
      setOrders(response.data.orders);
      setError(null);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
      setError("Erro ao carregar os pedidos. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getOrders();
    const interval = setInterval(getOrders, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Button />
      <Container>
        <h2>Pedidos</h2>
        {error && <p className="error">{error}</p>}
        <div className="order_status">
          {isLoading ? (
            <p>Carregando pedidos...</p>
          ) : orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id} className="orderCard">
                <h2>Pedido: {order.id}</h2>
                <p>
                  Status:
                  <select
                    name="statusOrder"
                    id="statusOrder"
                    value={orderStatuses[order.id] ?? order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                  >
                    <option value="1">Pendente</option>
                    <option value="2">Pago</option>
                    <option value="3">Em preparo</option>
                    <option value="4">Entregue</option>
                    <option value="5">Cancelado</option>
                  </select>
                </p>
                <p>Total: R$ {order.order_total}</p>
                <p>
                  Nota do usuário: {order.notes || "Nenhuma nota do usuário"}
                </p>
                <p>
                  Nota do administrador:
                  <input
                    type="text"
                    value={
                      adminNotes[order.id] ??
                      order.admin_notes ??
                      "Nenhum comentário do Adm"
                    }
                    onChange={(e) => handleNoteChange(order.id, e.target.value)}
                  />
                </p>
                <p>Data: {new Date(order.created_at).toLocaleDateString()}</p>
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                <div className="buttonEdit" onClick={() => editOrder(order.id)}>
                  Editar pedido
                </div>
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
