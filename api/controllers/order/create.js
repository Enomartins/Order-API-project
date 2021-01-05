module.exports = {


  friendlyName: 'Create',


  description: 'Create order.',


  inputs: {
    fullName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      isEmail: true,
    },
    orderStatus: {
      type: 'string',
      isIn: ['unconfirmed', 'confirmed'],
      defaultsTo: 'unconfirmed'
    },
    product: {
      type: 'string',
      required: true
      
    },
    quanity: {
      type: 'number',
      required: true
    },
    price: {
      type: 'number',
      required: true
    },
    deliveryAddress: {
      type: 'string',
      required: true
    },
  },


  exits: {

    success: {
      statusCode: 201,
      description: 'New order created',
    },
    error: {
      description: 'Something went wrong',
    },

  },


  fn: async function (inputs, exits) {

    try {
      
      

      let newOrder = await Order.create({
        fullName: inputs.fullName,
        email: inputs.email,
        orderstatus: inputs.orderStatus,
        product: inputs.product,
        quanity: inputs.quanity,
        price: inputs.price,
        deliveryAddress: inputs.deliveryAddress
      }).fetch();


      

      

      return exits.success({
        message: `order was created successfully`,
      });

      
    } catch (error) {
      console.log (error)
        
          return exits.error({
            message: 'Oops :) an error occurred',
            error: error.message,
          });
      
    }

  }


};
