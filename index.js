let jsonF='[{"ccy":"EUR","base_ccy":"UAH","buy":"29.26910","sale":"29.50780"},{"ccy":"RUR","base_ccy":"UAH","buy":"0.36338","sale":"0.35878"},{"ccy":"USD","base_ccy":"UAH","buy":"26.97740","sale":"26.97490"},{"ccy":"BTC","base_ccy":"USD","buy":"8581.3246","sale":"9484.6220"}]'

let array=JSON.parse(jsonF)
 for(let i=0;i<array.length;i++){
 	console.log(array[i])
 }
