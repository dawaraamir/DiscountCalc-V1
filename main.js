function calculate() {
   var price= 0;
   var discount= 0;
   var afterDiscount= 0;
price = Number(document.discountCalculator.price.value);
  	numberOfMembers = Number(document.discountCalculator.value);
    discount = Number(document.discountCalculator.discount.value);


 afterDiscount=price - ( price*discount/100 );


   document.discountCalculator.price.value=price.toFixed(2);
   document.discountCalculator.discount.value=discount.toFixed(2);
   document.discountCalculator.afterDiscount.value=afterDiscount.toFixed(2);

}