///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const findPrices = cart.map((thing) => {
    return thing.price;
})



const summedPrice = findPrices.reduce((a, b) => {
    return a + b
})

console.log(summedPrice)







//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartCost, couponValue, tax){
    let taxedPrice = cartCost * tax;
    return taxedPrice - couponValue
}


console.log(calcFinalPrice(summedPrice, 4, 1.10))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

I was still thinking in the consept of what a store would need for their customer information, since this assessment has mainly been dealing with carts.
I will make a list of information that a grocery store could need to make an account for a customer who wants to make a rewards account.
First name, because there needs to be a name to put the account under.
Second phoneNumber, also there to verify the account. Since people can have the same name it'll be good to have another form of ID to assign the account.
Third email, because every store need to have your email to send you all of their occasional coupons but mostly spam emails to.
Forth a membership card, that the coustomer can use to get reward points.
Fifth the membership card number, so that reward points can be given to the correct card.
Sixth the reward points, so that the costomer could be rewarded and encouraged to shop at your store.




*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

/*


{
    fullName: 'string',
    phoneNumber: number,
    email: 'string',
    membershipCard: boolean,
    CardNumber: number,
    rewardPoints: number,
}


*/
