

const availableSeat = document.getElementById('Available-seat')
const selectSeat = document.getElementById('selectSeat')
const selectCount = document.getElementById('seat-count')
const totalPrice = document.getElementById('total-price')
const couponInput = document.getElementById('coupon-input')
const couponButton = document.getElementById('coupon-btn')
const couponValue = document.getElementById('coupon-value')
const grandTotalEl =document.getElementById('Grand-total')
const phoneNumber = document.getElementById('phone-number')
const nextButton = document.getElementById("next-btn")

document.getElementById('scrollBar').addEventListener('click', function(){
    document.getElementById('target-Section').scrollIntoView({behavior: 'smooth'});
})

let allSelectSeat = [];
let totalPriceValue = 0;
function handSelectedSeat(event){

    // already you have any set click now you give alert massage
    const value = event.innerText;
    if(allSelectSeat.includes(value)){
       return alert('Already set booked')
    }else if(allSelectSeat.length < 4){

        event.classList.add('bg-warning')
        event.classList.add('text-white')
        allSelectSeat.push(event.innerText);
        selectCount.innerText = allSelectSeat.length;
        // selectCount.innerText = selectSeatEl.length;
    
    
        // available set decrease
        const availableSeatValue = parseFloat(availableSeat.innerText)
        const newAvailableSeatValue = availableSeatValue - 1;
        availableSeat.innerText = newAvailableSeatValue;
      
        // price add to set value
        totalPriceValue += 500;
        totalPrice.innerText = totalPriceValue.toFixed(2);
    
    
        // coupon disable remove with condition
        if(allSelectSeat.length > 3){
            couponInput.removeAttribute('disabled') 
            couponButton.removeAttribute('disabled')
          
        }
    
    
        // selectSeat count
        No_set.classList.add('hidden')
        selectSeat.innerHTML +=`<li class=" flex justify-between my-2 items-center text-lg font-semibold">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li>`
    
    }else{
       return alert('Maximum four set booked');
    }
}
document.getElementById('coupon-btn').addEventListener('click', function(event){
    // console.log('hello');
    const couponInputValue = couponInput.value;
    let couponSave = 0;
    // console.log(couponInputValue);
    if(couponInputValue !== "NEW50" && couponInputValue !== "Couple 20"){
        return alert('you provided coupon is not valid')
    }
    if(couponInputValue ==='NEW50'){
        couponSave= totalPriceValue * .15;

    }else if(couponInputValue === 'Couple 20'){
        couponSave = totalPriceValue * .20;
    }
    const showCouponPriceEl=document.getElementById('show-coupon-price')
    showCouponPriceEl.innerHTML = `
     <p class="text-lg font-semibold">Discount</p>
        <p class="text-lg font-semibold">
            <span>BDT:</span>
            <span>${couponSave.toFixed(3)}</span>
        </p>
    
    `
    // console.log(couponSave);
    const grandTotalValue = totalPriceValue - couponSave;
    grandTotalEl.innerText = grandTotalValue.toFixed(2)



})
phoneNumber.addEventListener('input', function(e){
    const inputValue = e.target.value;
    if(inputValue.length >= 11){
        nextButton.removeAttribute('disabled')
      
    }
    document.getElementById('btn-continue').addEventListener('click', function(e){
        window.location.reload();
    })
})