# RapidToGo - Client

## 0. Project setup & Requirements

### Tools reuired

- Node.js
- NPM
- **Docker**, in case you want to run the app in a container

```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 1.1 Domain Model

- Customer
- Partner
- User
    - Address
    - PaymentMethod
    - CreditCard
    - Personal Data
- Restaurant
    - Address
    - Menu
        - MenuItem
            - Price
            - Description
            - Image (optional)
            - Category
            - Allergic Ingredients
    - OpeningHours
    - PaymentMethod allowed
    - Category
    - Review
    - Rating
    - Delivery or Pick up
- Order
    - Address (optional)
    - PaymentMethod
    - OrderStatus
    - OrderItem
    - TotalPrice
    - Date & Time

###

### 1.2 User functionalities

### 1.2.1 Global features
- Register
- Login
- Logout
- Profile

### 1.2.2 Customer features
- Search for Restaurants
- View Restaurant Details
- Add Restaurant to Favorites
- View Favorites
- Place Order
- View Order History
- View Order Details
- Cancel Order
- Rate Restaurant
- Review Restaurant
- View Restaurant Reviews
- View Restaurant Ratings
- View Restaurant Categories
- View Restaurant Menu
- View Restaurant Opening Hours

### 1.2.3 Partner features

- Create Restaurant
- Edit Restaurant
- Delete Restaurant
- View Restaurant Orders
- View Restaurant Order Details
- Accept Order
- Decline Order
- View Restaurant Reviews
- View Restaurant Ratings
- View Restaurant Categories
- View Restaurant Menu
- View Restaurant Opening Hours
- View Restaurant Payment Methods
- Create Menu
- Edit Menu
- Delete Menu
- Create Menu Item
- Edit Menu Item
- Delete Menu Item
- View Restaurant Revenue

### 1.2.4 Admin features

- View All Restaurants
- View All Orders
- View All Reviews
- View All Ratings
- View All Categories
- View All Menu Items
- View All Payment Methods
- View All Credit Cards
- View All Addresses
- View All Users
- View All Personal Data