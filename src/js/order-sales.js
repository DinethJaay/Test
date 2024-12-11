function orderSalesByTotal(sales) {
  if (!Array.isArray(sales)) {
    throw new TypeError("Input must be an array of sales objects");
  }

  return sales
    .map((sale) => {
      if (
        typeof sale.amount !== "number" ||
        typeof sale.quantity !== "number"
      ) {
        throw new TypeError("Each sale must have numeric properties");
      }

      return {
        ...sale,
        Total: sale.amount * sale.quantity,
      };
    })
    .sort((a, b) => b.Total - a.Total);
}

module.exports = orderSalesByTotal;
