import { useEffect, useState } from "react";
export const Order = () => {
  const [order, setorder] = useState([]);
  const getOrder = async () => {
    try {
      const response = await fetch("http://localhost:2000/api/order", {
        method: "GET",
        redirect: "follow",
      });
      const data = await response.json();
      setorder(data.orderData);
    } catch (error) {
      console.log("Error getting order", error);
    }
  };

  //   function getFields(input, field) {
  //     var orderitem;
  //     for (var i=0; i < input?.length ; ++i){
  //         orderitem = input[i][field];
  //     }
  //     return orderitem
  // }

  // function getField(input, field) {
  //     var price = {};
  //     for (var i=0; i < input?.length ; ++i){
  //         price = input[i][field];
  //     }
  //     return price
  // }

  // var orderItem = getFields(order, "orderItem")
  // var price = getField(orderItem , "price")
  // var name = getField(orderItem , "name")
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div id="collapse1" className="border shadow">
      <div id="collapse1">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Buyer Name</th>
              <th scope="col">Name of Dish</th>
              <th scope="col">price</th>
              <th scope="col">city</th>
              <th scope="col">Postal Code</th>
            </tr>
          </thead>
          <tbody>
            {order?.map((item, i) => {
              return (
                <tr key={item._id}>
                  <th scope="row">{i + 1}</th>
                  <td>{item?.name}</td>
                  <td>
                    {item?.orderItem?.map((item) => {
                      return <p>{item.name}</p>;
                    })}
                  </td>
                  <td>
                    {" "}
                    {item?.orderItem?.map((items) => {
                      return <p>{items.price}</p>;
                    })}
                  </td>
                  <td>{item?.city}</td>
                  <td>{item?.postalcode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
