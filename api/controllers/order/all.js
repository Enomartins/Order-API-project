module.exports = {


  friendlyName: 'All',


  description: 'All order.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    const orders = await Order.find({
    

    });

    // All done.
    return orders;

  }


};
