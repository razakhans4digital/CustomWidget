const useGetComponentPropertyTypes = (props) => {

    const {icon}=props;
    const {productImage} = props;
    let iconClass=""
    let imageUrl=""
        if(icon.status === "available")
        {
           const {
                    value : {iconClass:className}
                 }  =icon;
                    iconClass=className;
        }

        //image

        if(productImage.status === "available")
        {
            imageUrl=productImage.value.uri
        }


        // widget content

        const {widgetContent} = props

        return {iconClass,imageUrl,widgetContent};
};

export default useGetComponentPropertyTypes;