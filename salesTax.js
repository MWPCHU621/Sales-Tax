var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//calculate total sales of all the unique companies in companySalesData as well as total tax for the companies.
function calculateSalesTax(salesData, taxRates) {
  //console.log(calculateSalesByRegion(companySalesData, "SK"));


}

//calculate total sales region
function calculateSalesByRegion(salesData, region)
{
  let total = 0;
  for(let i = 0; i < companySalesData.length; i++)
  {
    if(companySalesData[i].province === region)
    {
      console.log(companySalesData[i].sales);
      for(let j = 0; j < companySalesData[i].sales[j]; j++)
      {
        total += companySalesData[i].sales[j];
      }
    }
  }
  return total;
}

//calculates total sales by unique companies
function calculateSalesByCompany(salesData, name)
{
  let total = 0;

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/