# ShopHUB Application

# This is a simple e-commerce web application where users can browse a list of products, add them to the shopping cart, view the cart, and proceed to checkout. The app is built using React and Redux for state management, with routing handled by React Router.

# Table of Contents
- Demo
- Features
- Installation
- Usage
- Project Structure
- API
- Components
- Styling
- Technologies Used
- Contributing
- License

# Demo : https://myshophub.netlify.app/
A live demo of the application can be viewed here: https://myshophub.netlify.app/

# Features
- Browse Products: Users can browse a list of products, each with a title, description, price, and image.
- Add to Cart: Users can add products to their cart and see an updated total.
- Remove from Cart: Users can remove items from their cart.
- Checkout: Users can clear the cart after confirming their purchase.
- Responsive Design: The app is responsive, making it accessible on mobile, tablet, and desktop devices.
- Navigation: A modern navbar with links to Products, Cart, and Profile pages.
- Popup Notifications: Popup notifications appear when a product is added to the cart or deleted from it.
- Error Handling: Proper fallback for broken images in product listings.

# Installation

- Clone the repository: git clone https://github.com/SachinWariyal/ShopHub.git
- cd ShoppingCart
- npm install
- npm run dev

# Usage
Once the app is running:

- Browse Products: The homepage will display a list of products. Each product shows an image, title, description, and price.
- Add to Cart: Click the "Add to Cart" button on any product to add it to the shopping cart.
- View Cart: Navigate to the Cart page by clicking the "Cart" link in the navbar. You can view all items in your cart and the total price.
- Remove Items: You can remove individual items from the cart by clicking the "Delete" button.
- Checkout: Click the Checkout button to complete the process and clear the cart.
- Responsive Design: Resize the window or access the site on mobile to see the responsive design.

# Project Structure

ShoppingCart/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── productsApi.js        # Fetch products from API
│   ├── components/
│   │   ├── Navbar.js             # Navbar component
│   │   ├── ProductList.js        # Product list component
│   │   ├── ProductDetails.js     # Product details component
│   │   ├── Cart.js               # Cart component
│   │   ├── Pagination.js         # Pagination component
│   │   └── Spinner.js            # Loading spinner component
│   ├── redux/
│   │   ├── cartSlice.js          # Redux cart slice
│   │   └── store.js              # Redux store configuration
│   ├── App.js                    # Main app component
│   ├── index.js                  # Main entry point
│   ├── styles/
│   │   ├── Navbar.css            # Navbar styles
│   │   ├── ProductList.css       # Product list styles
│   │   ├── ProductDetails.css    # Product details styles
│   │   └── Cart.css              # Cart styles
└── package.json


# API
This application uses the following public API to fetch product data:

# API URL: https://api.escuelajs.co/api/v1/products

# Components

1. Navbar
Displays navigation links to the Products, Cart, and Profile pages.
Located at the top of every page.
2. Product List
Displays a list of products fetched from the API.
Products can be added to the cart.
3. Product Details
Displays detailed information about a selected product.
Accessible via the "View Details" link on each product.
4. Cart
Displays items that have been added to the cart.
Users can remove items or proceed to checkout.
5. Pagination
Handles pagination on the product listing page, displaying 8 products per page.
6. Spinner
Displays a loading spinner when data is being fetched from the API.

# Technologies Used

- React: JavaScript library for building user interfaces.
- Redux: For global state management.
- React Router: For navigation and routing.
- Axios: For API calls (if used in productsApi).
- CSS3: For modern and responsive styling.

# Author

Developed by Sachin Wariyal. Feel free to reach out for any questions : sachinwariyal4@gmail.com.
