
// Tamim Iqbal
const sharesData = [11,41,02,87,33,50,34,62,50,19,45,50,75,78,23]
console.log("Tamim Iqbal : ", sharesData)

const lenA =sharesData.length
// Tamim Iqbal Assume value detected 
const assumeValueA = sharesData[Math.round(sharesData.length/2)]
console.log("Tamim Iqbal Assume Value (A) : ", assumeValueA)

// d (x- A) Values findout 
const d = sharesData.map(e=>e-assumeValueA)
console.log("d (x-A) : ",d)

// Summation of d value 
const sumOfd = d.reduce((a,b)=>a+b,0)
console.log("Sum of d: ",sumOfd)

// Tamim Iqbal(d) square values
const squareOfdValues = d.map(e=> e**2)
console.log("d square: ",squareOfdValues)

// Tamim Iqbal (d) square summation
const dSquareSummation = squareOfdValues.reduce((a,b)=>a+b,0)
console.log("Sum of d square values: ",dSquareSummation)

// Calculation part of the Tamim Iqbal

const sigma = (dSquareSummation/ lenA ) - (sumOfd / lenA) ** 2

const finalSigma = Math.sqrt(sigma)

console.log(finalSigma.toFixed(2))


const xNot = assumeValueA + (sumOfd/lenA)
console.log(xNot.toFixed(2))


// Main Answer CV of Tamim Iqbal
const cvA = (finalSigma/ xNot ) * 100

console.log("CV of Tamim Iqbal: "+ cvA.toFixed(2)+"%" )

// Tamim Iqbal end

// shakib al hasan

const sharesData2 = [18,10,77,30,20,10,30,96,19,04,27,75,45,29,11]
console.log("shakib al hasan : ", sharesData2)

const len2 =sharesData2.length
// shakib al hasan Assume value detected 
const assumeValue2 = sharesData2[Math.round(sharesData2.length/2)]
console.log("Tamim Iqbal Assume Value (A) : ", assumeValue2)

// d (x- A) Values findout 
const d2 = sharesData2.map(e=>e-assumeValue2)
console.log("d (x-A) : ",d2)

// Summation of d value 
const sumOfd2 = d2.reduce((a,b)=>a+b,0)
console.log("Sum of d: ",sumOfd2)

// shakib al hasan(d) square values
const squareOfdValues2 = d2.map(e=> e**2)
console.log("d square: ",squareOfdValues)

// shakib al hasan (d) square summation
const dSquareSummation2 = squareOfdValues2.reduce((a,b)=>a+b,0)
console.log("Sum of d square values: ",dSquareSummation2)

// Calculation part of the shakib al hasan

const sigma2 = (dSquareSummation2/ len2 ) - (sumOfd2 / len2) ** 2

const finalSigma2 = Math.sqrt(sigma2)

console.log(finalSigma2.toFixed(2))


const xNot2 = assumeValue2 + (sumOfd2/len2)
console.log(xNot2.toFixed(2))


// Main Answer CV of shakib al hasan
const cv2 = (finalSigma2/ xNot2 ) * 100

console.log("CV of shakib al hasan: "+ cv2.toFixed(2)+"%" )



