import "./styles.css";

console.log('Started');

handleOrderPlacement();

function handleOrderPlacement() {
  return getBasket(function (basketData) {
    updateDeliveryAddress(basketData, function(deliveryAddres) {
      updateDeliveryMethod(deliveryAddres, function(deliveryInfo) {
        updateBillingAddress(deliveryInfo, function(orderData) {
          placeOrder(orderData, function() {
            console.log('Finished');
          });  
        });
      });
    });
  });
};

function getBasket(callback) {
  console.log('Started getBasket()');

  setTimeout(function() {
    console.log('Callback getBasket()');
    callback('Sample basket data');
  }, 1000);
};

function updateDeliveryAddress(basketData, callback) {
  console.log('Started updateDeliveryAddress() with: ', basketData);

  setTimeout(function() {
    console.log('Callback updateDeliveryAddress()');
    callback('Sample delivery address data');
  }, 1000);
};

function updateDeliveryMethod(deliveryAddress, callback) {
  console.log('Started updateDeliveryMethod() with: ', deliveryAddress);

  setTimeout(function() {
    console.log('Callback updateDeliveryMethod()');
    callback('Sample delivery info');
  }, 1000);
};

const updateBillingAddress = (deliveryInfo, callback) => {
  console.log('Started updateBillingAddress() with: ', deliveryInfo);

  setTimeout(function() {
    console.log('Callback updateBillingAddress()');
    callback('Sample order data');
  }, 1000);
};

const placeOrder = (orderData, callback) => {
  console.log('Started placeOrder() with: ', orderData);

  setTimeout(function() {
    console.log('Callback placeOrder()');
    callback();
  }, 1000);
};
