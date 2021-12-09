const Product = require('../core/Product');

const getAllProducts = async (req, res, next) => {
  try {
    // Aggregation replaces the .find() method.
    const allProducts = await Product.aggregate()
      /**
       * An aggregation is built-up using stages.
       * In every stage, the results of the previous stage are passed in.
       * Important stages to note are the group(), match(), lookup() and project()
       * .sort(), limit() and skip() function the same way as in .find()
       */
      .match({
        // Match acts as a filter.
        isInStock: true,
      })
      .lookup({
        // Lookup enables to see the contents of another collection, acting as a JOIN statement.
        from: 'locations',
        localField: 'locationName',
        foreignField: 'locationName',
        as: 'fullLocationDetails',
      })
      .project({
        // Project allows to change the objects within the array. Remember to use the $ sign to denote variable names.
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
