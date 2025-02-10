const { MongoClient } = require("mongodb");

async function getSalesReport() {
  const uri = "mongodb://localhost:27017"; 
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("ecommerce"); 
    const sales = database.collection("sales");

    const pipeline = [
      {
        $unwind: "$items",
      },
      {
        $group: {
          _id: {
            store: "$store",
            month: { $dateToString: { format: "%Y-%m", date: "$date" } },
          },
          totalRevenue: {
            $sum: { $multiply: ["$items.quantity", "$items.price"] },
          },
          totalItemsSold: { $sum: "$items.quantity" },
          totalPriceSum: { $sum: "$items.price" },
        },
      },
      {
        $project: {
          _id: 0,
          store: "$_id.store",
          month: "$_id.month",
          totalRevenue: 1,
          averagePrice: {
            $divide: ["$totalPriceSum", "$totalItemsSold"],
          },
        },
      },
      {
        $sort: { store: 1, month: 1 },
      },
    ];

    const results = await sales.aggregate(pipeline).toArray();
    console.log(results);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

getSalesReport();
