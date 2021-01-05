module.exports = {


  friendlyName: 'All',


  description: 'All order.',


  inputs: {

  },


  exits: {

  },

//fetch data
  fn: async function (inputs) {

    const orders = await Order.find({
    

    });

    // All done.
    return orders;

  }


};
