

const useGetDynamicPropertyTypes=(props) => {
    let priceColor=""

    const {
        priceColor:{ status : prcColorStatus,
                     value : prcColor 
                   }} = props;

        if(prcColorStatus === "available"){
            priceColor = prcColor
        }



        //textTemplate

        let textTemp=""

        const {
            textTemp:{ status : textTempStatus,
                         value : prodTemplate 
                       }} = props;
    
            if(textTempStatus === "available"){
                textTemp = prodTemplate
            }


         //actions
         
         
         const{changePrice} = props;
         const onChangePrice = () => {
            if(changePrice && changePrice.canExecute){
                changePrice.execute()
            }
         };

  return {
    priceColor,
    textTemp,
    onChangePrice,
  }
}

export default useGetDynamicPropertyTypes