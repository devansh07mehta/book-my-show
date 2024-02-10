import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ReactDOM from "react-dom"

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
// function YourComponent() {
//   const createOrder = (data) => {
//     // Order is created on the server and the order id is returned
//     return fetch("/my-server/create-paypal-order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // use the "body" param to optionally pass additional order information
//       // like product skus and quantities
//       body: JSON.stringify({
//         cart: [
//           {
//             sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
//             quantity: "YOUR_PRODUCT_QUANTITY",
//           },
//         ],
//       }),
//     })
//       .then((response) => response.json())
//       .then((order) => order.id);
//   };
//   const onApprove = (data) => {
//     // Order is captured on the server and the response is returned to the browser
//     return fetch("/my-server/capture-paypal-order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         orderID: data.orderID
//       })
//     })
//       .then((response) => response.json());
//   };
//   return (
//     <PayPalButton
//       createOrder={(data) => createOrder(data, actions)}
//       onApprove={(data) => onApprove(data, actions)}
//     />
//   );
// }

const PaymentModel = ({ setIsOpen, isOpen, price }) => {

  const closeModal = () => {
    setIsOpen(false);
  };

  const launchRazorPay = () => {

    let options = {
      key: 'rzp_test_Fom9DOmbHqxhzy',
      amount: price * 100,
      currency: "INR",
      name: "Book My Show Clone",
      description: "Movie purchase or rental",
      image:
        "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
      handler: () => {
        setIsOpen(false);
        alert("Payment Successful");
      },
      theme: { color: "#c4242d" },
    };

    let razorPay = window.Razorpay(options);
    razorPay.open();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900"
                  >
                    Please make a payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Please click on the below <b>Pay</b> button to make a payment.
                    </p>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={launchRazorPay}
                    >
                      Pay ₹{price}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel Payment
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PaymentModel;
