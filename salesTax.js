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
  //console.log(calculateSalesByCompany(companySalesData, "Telus"));
  //console.log(calculateSalesByCompany(companySalesData, "Bombardier"));

  let SalesTaxByCompany = {};

  for(let i = 0; i < salesData.length; i++)
  {
    SalesTaxByCompany[salesData[i].name] = {};
  }


  for(company in SalesTaxByCompany)
  {
    SalesTaxByCompany[company].totalSales = calculateSalesByCompany(salesData, company);
    SalesTaxByCompany[company].totalTaxes = calculateTaxByCompany(salesData, salesTaxRates, company);
  }


  console.log(SalesTaxByCompany);
  return SalesTaxByCompany;
}

//calculate total sales region
function calculateSalesByRegion(salesData, region)
{
  let total = 0;
  for(let i = 0; i < salesData.length; i++)
  {
    if(salesData[i].province === region)
    {
      for(let j = 0; j < salesData[i].sales[j]; j++)
      {
        total += salesData[i].sales[j];
      }
    }
  }
  return total;
}

//calculates total sales by unique companies
function calculateSalesByCompany(salesData, name)
{
  let total = 0;
  for(let i = 0; i < salesData.length; i++)
  {
    if(salesData[i].name === name)
    {
      total += calculateSalesByRegion(salesData, salesData[i].province);
    }
  }

  return total;

}
function calculateTaxByRegion(salesData, salesTaxRates, region)
{
  let total;
  for(let i = 0; i< salesData.length; i++)
  {
    let sales = calculateSalesByRegion(salesData, region);
    total = sales * salesTaxRates[region];
  }

  return total;
}

function calculateTaxByCompany(salesData, salesTaxRates, company)
{
  let total = 0;
  for(let i = 0; i < salesData.length; i++)
  {
    if(salesData[i].name === company)
    {
      total += calculateTaxByRegion(salesData, salesTaxRates, salesData[i].province);
    }
  }
  //console.log(total);
  return total;
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