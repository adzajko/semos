const Product = require('../core/Product');

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.aggregate()
      .match({
        isInStock: true,
      })
      .lookup({
        from: 'locations',
        localField: 'locationName',
        foreignField: 'locationName',
        as: 'fullLocationDetails',
      })
      .project({
        imeNaProduktot: '$productName',
        cenaNaProduktot: '$productPrice',
        voZalihaE: '$isInStock',
        detaliZaLokacija: {
          $first: '$fullLocationDetails',
        },
      })
      .sort({
        cenaNaProduktot: 'asc',
      })
      .limit(1);
    return res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const bulkInsertProducts = async (req, res, next) => {
  const products = req.body;
  if (!products || products.length < 1) {
    return res.status(400).json('Products are required!');
  }

  try {
    await Product.insertMany(products);
    return res.status(201).json('Products were inserted into the database.');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllProducts,
  bulkInsertProducts,
};
