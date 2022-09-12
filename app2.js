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
const cvB = (finalSigma2/ xNot2 ) * 100
 
console.log("CV of shakib al hasan: "+ cvB.toFixed(2)+"%" )
 
// Shakib Al hasan end
 
 
// Mahmudullah Riyad
const sharesData = [39,80,20,26,2,3,41,7,25,25,29,32,36,19,45]
console.log("Mahmudullah Riyad : ", sharesData)
 
const lenA =sharesData.length
// Mahmudullah Riyad Assume value detected 
const assumeValueA = sharesData[Math.round(sharesData.length/2)]
console.log("Mahmudullah Riyad (A) : ", assumeValueA)
 
// d (x- A) Values findout 
const d = sharesData.map(e=>e-assumeValueA)
console.log("d (x-A) : ",d)
 
// Summation of d value 
const sumOfd = d.reduce((a,b)=>a+b,0)
console.log("Sum of d: ",sumOfd)
 
// Mahmudullah Riyad(d) square values
const squareOfdValues = d.map(e=> e**2)
console.log("d square: ",squareOfdValues)
 
// Mahmudullah Riyad (d) square summation
const dSquareSummation = squareOfdValues.reduce((a,b)=>a+b,0)
console.log("Sum of d square values: ",dSquareSummation)
 
// Calculation part of the Tamim Iqbal
 
const sigma = (dSquareSummation/ lenA ) - (sumOfd / lenA) ** 2
 
const finalSigma = Math.sqrt(sigma)
 
console.log(finalSigma.toFixed(2))
 
 
const xNot = assumeValueA + (sumOfd/lenA)
console.log(xNot.toFixed(2))
 
 
// Main Answer CV of Mahmudullah Riyad
const cvC = (finalSigma/ xNot ) * 100
 
console.log("CV of Mahmudullah Riyad: "+ cvC.toFixed(2)+"%" )
 
// Mahmudullah Riyad end
 
// Mushfiqur Rahim
const sharesData = [5,25,52,3,11,9,11,9,7,86,43,28,49,89,33]
console.log("Mushfiqur Rahim : ", sharesData)
 
const lenA =sharesData.length
// Mahmudullah Riyad Assume value detected 
const assumeValueA = sharesData[Math.round(sharesData.length/2)]
console.log("Mushfiqur Rahim (A) : ", assumeValueA)
 
// d (x- A) Values findout 
const d = sharesData.map(e=>e-assumeValueA)
console.log("d (x-A) : ",d)
 
// Summation of d value 
const sumOfd = d.reduce((a,b)=>a+b,0)
console.log("Sum of d: ",sumOfd)
 
// Mahmudullah Riyad(d) square values
const squareOfdValues = d.map(e=> e**2)
console.log("d square: ",squareOfdValues)
 
// Mahmudullah Riyad (d) square summation
const dSquareSummation = squareOfdValues.reduce((a,b)=>a+b,0)
console.log("Sum of d square values: ",dSquareSummation)
 
// Calculation part of the Tamim Iqbal
 
const sigma = (dSquareSummation/ lenA ) - (sumOfd / lenA) ** 2
 
const finalSigma = Math.sqrt(sigma)
 
console.log(finalSigma.toFixed(2))
 
 
const xNot = assumeValueA + (sumOfd/lenA)
console.log(xNot.toFixed(2))
 
 
// Main Answer CV of Mahmudullah Riyad
const cvD = (finalSigma/ xNot ) * 100
 
console.log("CV of Mahmudullah Riyad: "+ cvD.toFixed(2)+"%" )
 
// Mushfiqur Rahim end
 
 
 
// Imrul Kayes
const sharesData = [5,4,115,90,144,2,9,72,1,68,35,13,18,62,31]
console.log("Imrul Kayes : ", sharesData)
 
const lenA =sharesData.length
// Mahmudullah Riyad Assume value detected 
const assumeValueA = sharesData[Math.round(sharesData.length/2)]
console.log("Imrul Kayes (A) : ", assumeValueA)
 
// d (x- A) Values findout 
const d = sharesData.map(e=>e-assumeValueA)
console.log("d (x-A) : ",d)
 
// Summation of d value 
const sumOfd = d.reduce((a,b)=>a+b,0)
console.log("Sum of d: ",sumOfd)
 
// Mahmudullah Riyad(d) square values
const squareOfdValues = d.map(e=> e**2)
console.log("d square: ",squareOfdValues)
 
// Mahmudullah Riyad (d) square summation
const dSquareSummation = squareOfdValues.reduce((a,b)=>a+b,0)
console.log("Sum of d square values: ",dSquareSummation)
 
// Calculation part of the Tamim Iqbal
 
const sigma = (dSquareSummation/ lenA ) - (sumOfd / lenA) ** 2
 
const finalSigma = Math.sqrt(sigma)
 
console.log(finalSigma.toFixed(2))
 
 
const xNot = assumeValueA + (sumOfd/lenA)
console.log(xNot.toFixed(2))
 
 
// Main Answer CV of Mahmudullah Riyad
const cvE = (finalSigma/ xNot ) * 100
 
console.log("CV of Imrul Kayes: "+ cvE.toFixed(2)+"%" )
 
// Imrul Kayes end
 
 
 
 
 
// Afif Hossain
const sharesData = [85,41,2,5,7,22,39,72,17,5,26,33,15,17,29]
console.log("Afif Hossain : ", sharesData)
 
const lenA =sharesData.length
// Mahmudullah Riyad Assume value detected 
const assumeValueA = sharesData[Math.round(sharesData.length/2)]
console.log("Afif Hossain (A) : ", assumeValueA)
 
// d (x- A) Values findout 
const d = sharesData.map(e=>e-assumeValueA)
console.log("d (x-A) : ",d)
 
// Summation of d value 
const sumOfd = d.reduce((a,b)=>a+b,0)
console.log("Sum of d: ",sumOfd)
 
// Mahmudullah Riyad(d) square values
const squareOfdValues = d.map(e=> e**2)
console.log("d square: ",squareOfdValues)
 
// Mahmudullah Riyad (d) square summation
const dSquareSummation = squareOfdValues.reduce((a,b)=>a+b,0)
console.log("Sum of d square values: ",dSquareSummation)
 
// Calculation part of the Tamim Iqbal
 
const sigma = (dSquareSummation/ lenA ) - (sumOfd / lenA) ** 2
 
const finalSigma = Math.sqrt(sigma)
 
console.log(finalSigma.toFixed(2))
 
 
const xNot = assumeValueA + (sumOfd/lenA)
console.log(xNot.toFixed(2))
 
 
// Main Answer CV of Mahmudullah Riyad
const cvF = (finalSigma/ xNot ) * 100
 
console.log("CV of Afif Hossain: "+ cvF.toFixed(2)+"%" )
 
// Afif Hossain end
 
 
 
 
 
// Virat Kohli
const sharesData = [17,16,9,18,28,65,3,51,7,66,35,26,55,45,48]
console.log("Virat Kohli : ", sharesData)
 
const lenA =sharesData.length
// Mahmudullah Riyad Assume value detected 
const assumeValueA = sharesData[Math.round(sharesData.length/2)]
console.log("Virat Kohli (A) : ", assumeValueA)
 
// d (x- A) Values findout 
const d = sharesData.map(e=>e-assumeValueA)
console.log("d (x-A) : ",d)
 
// Summation of d value 
const sumOfd = d.reduce((a,b)=>a+b,0)
console.log("Sum of d: ",sumOfd)
 
// Mahmudullah Riyad(d) square values
const squareOfdValues = d.map(e=> e**2)
console.log("d square: ",squareOfdValues)
 
// Mahmudullah Riyad (d) square summation
const dSquareSummation = squareOfdValues.reduce((a,b)=>a+b,0)
console.log("Sum of d square values: ",dSquareSummation)
 
// Calculation part of the Tamim Iqbal
 
const sigma = (dSquareSummation/ lenA ) - (sumOfd / lenA) ** 2
 
const finalSigma = Math.sqrt(sigma)
 
console.log(finalSigma.toFixed(2))
 
 
const xNot = assumeValueA + (sumOfd/lenA)
console.log(xNot.toFixed(2))
 
 
// Main Answer CV of Mahmudullah Riyad
const cvG = (finalSigma/ xNot ) * 100
 
console.log("CV of Virat Kohli: "+ cvG.toFixed(2)+"%" )
 
// Virat Kohli end
 
 
 
 
 
// Rohit Sharma
const sharesData = [17,5,76,13,7,60,37,25,28,119,59,64,75,69,25]
console.log("Rohit Sharma : ", sharesData)
 
const lenA =sharesData.length
// Mahmudullah Riyad Assume value detected 
const assumeValueA = sharesData[Math.round(sharesData.length/2)]
console.log("Rohit Sharma (A) : ", assumeValueA)
 
// d (x- A) Values findout 
const d = sharesData.map(e=>e-assumeValueA)
console.log("d (x-A) : ",d)
 
// Summation of d value 
const sumOfd = d.reduce((a,b)=>a+b,0)
console.log("Sum of d: ",sumOfd)
 
// Mahmudullah Riyad(d) square values
const squareOfdValues = d.map(e=> e**2)
console.log("d square: ",squareOfdValues)
 
// Mahmudullah Riyad (d) square summation
const dSquareSummation = squareOfdValues.reduce((a,b)=>a+b,0)
console.log("Sum of d square values: ",dSquareSummation)
 
// Calculation part of the Tamim Iqbal
 
const sigma = (dSquareSummation/ lenA ) - (sumOfd / lenA) ** 2
 
const finalSigma = Math.sqrt(sigma)
 
console.log(finalSigma.toFixed(2))
 
 
const xNot = assumeValueA + (sumOfd/lenA)
console.log(xNot.toFixed(2))
 
 
// Main Answer CV of Mahmudullah Riyad
const cvH = (finalSigma/ xNot ) * 100
 
console.log("CV of Rohit Sharma: "+ cvH.toFixed(2)+"%" )
 
// Rohit Sharma end
 
 
// Babar Azam
const sharesData = [91,57,74,1,77,103,105,114,57,158,75,65,36,45,42]
console.log("Babar Azam : ", sharesData)
 
const lenA =sharesData.length
// Mahmudullah Riyad Assume value detected 
const assumeValueA = sharesData[Math.round(sharesData.length/2)]
console.log("Babar Azam (A) : ", assumeValueA)
 
// d (x- A) Values findout 
const d = sharesData.map(e=>e-assumeValueA)
console.log("d (x-A) : ",d)
 
// Summation of d value 
const sumOfd = d.reduce((a,b)=>a+b,0)
console.log("Sum of d: ",sumOfd)
 
// Mahmudullah Riyad(d) square values
const squareOfdValues = d.map(e=> e**2)
console.log("d square: ",squareOfdValues)
 
// Mahmudullah Riyad (d) square summation
const dSquareSummation = squareOfdValues.reduce((a,b)=>a+b,0)
console.log("Sum of d square values: ",dSquareSummation)
 
// Calculation part of the Tamim Iqbal
 
const sigma = (dSquareSummation/ lenA ) - (sumOfd / lenA) ** 2
 
const finalSigma = Math.sqrt(sigma)
 
console.log(finalSigma.toFixed(2))
 
 
const xNot = assumeValueA + (sumOfd/lenA)
console.log(xNot.toFixed(2))
 
 
// Main Answer CV of Mahmudullah Riyad
const cvI = (finalSigma/ xNot ) * 100
 
console.log("CV of Babar Azam: "+ cvI.toFixed(2)+"%" )
 
// Babar Azam end
 
 
 
 
// Mohammad Rizwan
const sharesData = [69,14,11,15,59,3,23,17,74,25,23,33,45,90,67]
console.log("Mohammad Rizwan : ", sharesData)
 
const lenA =sharesData.length
// Mahmudullah Riyad Assume value detected 
const assumeValueA = sharesData[Math.round(sharesData.length/2)]
console.log("Mohammad Rizwan (A) : ", assumeValueA)
 
// d (x- A) Values findout 
const d = sharesData.map(e=>e-assumeValueA)
console.log("d (x-A) : ",d)
 
// Summation of d value 
const sumOfd = d.reduce((a,b)=>a+b,0)
console.log("Sum of d: ",sumOfd)
 
// Mahmudullah Riyad(d) square values
const squareOfdValues = d.map(e=> e**2)
console.log("d square: ",squareOfdValues)
 
// Mahmudullah Riyad (d) square summation
const dSquareSummation = squareOfdValues.reduce((a,b)=>a+b,0)
console.log("Sum of d square values: ",dSquareSummation)
 
// Calculation part of the Tamim Iqbal
 
const sigma = (dSquareSummation/ lenA ) - (sumOfd / lenA) ** 2
 
const finalSigma = Math.sqrt(sigma)
 
console.log(finalSigma.toFixed(2))
 
 
const xNot = assumeValueA + (sumOfd/lenA)
console.log(xNot.toFixed(2))
 
 
// Main Answer CV of Mahmudullah Riyad
const cvJ = (finalSigma/ xNot ) * 100
 
console.log("CV of Mohammad Rizwan: "+ cvJ.toFixed(2)+"%" )
 
// Babar Azam end
 
const allCV = [cvA,cvB,cvC,cvD,cvE,cvF,cvG,cvH,cvI,cvJ]
 
console.log(Math.min(...allCV))
 
 
 
 
 
 
// console.log(`Comments:  From our Calculation we find that the Prices of Shares of Company A shows the ${tofixedCVA}% > ${tofixedCVB}% , So the investor should Purchase the Shares of Company B`)