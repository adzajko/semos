import { v4 } from 'uuid';

let PRODUCTS = [
  {
    id: v4(),
    productName: 'Lenovo Legion Y530',
    productType: 'Laptop',
    productPrice: 800, // EUR,
    productDescription: 'A Powerful laptop, both for development and gaming.',
  },
  {
    id: v4(),
    productName: 'MacBook Pro',
    productType: 'Laptop',
    productPrice: 1300, // EUR,
    productDescription:
      'Expensive but enjoyable experience, bringing media and development at your fingertips.',
  },
  {
    id: v4(),
    productName: 'Corsair Harpoon',
    productType: 'Peripherals',
    productPrice: 50, // EUR,
    productDescription: 'Wireless, wired and bluetooth mouse.',
  },
];

export const getAllProducts = async () => {
  return PRODUCTS;
};

export const addProduct = async ({
  productName,
  productType,
  productPrice,
  productDescription,
}) => {
  const newProduct = {
    id: v4(),
    productName,
    productType,
    productPrice,
    productDescription,
  };

  PRODUCTS.push(newProduct);
  return newProduct;
};

export const editProduct = async (product) => {
  PRODUCTS = PRODUCTS.map((prd) => {
    if (prd.id === product.id) {
      return product;
    }

    return prd;
  });
};

/**
 *
 * @param {String} id The ID of the product (string, uuid)
 */
export const deleteProduct = async (id) => {
  PRODUCTS = PRODUCTS.filter((product) => product.id !== id);
};
