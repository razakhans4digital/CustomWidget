import React, { createElement } from "react";


import "./ui/LearningWidget.css";
import useGetStaticPropertyTypes from "./hooks/useGetStaticPropertyTypes";
import useGetComponentPropertyTypes from "./hooks/useGetComponentPropertyTypes";
import Column from "./components/Column";
import useGetDynamicPropertyTypes from "./hooks/useGetDynamicPropertyTypes";


export function LearningWidget(props) {
    console.log("props",props);

    const staticWidgetTypes = useGetStaticPropertyTypes(props);
    const { iconClass,imageUrl,widgetContent } = useGetComponentPropertyTypes(props);
    const { priceColor,textTemp,onChangePrice } = useGetDynamicPropertyTypes(props);
    // console.warn("staticTypes",staticWidgetTypes)

   
    // console.log("iconClass",iconClass);
    
    return (
        <>
            <div className="mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid">
                <div className="row">
                                <Column> <h3>Static Widget Types</h3>          
                                                               {Object.keys(staticWidgetTypes).map((key)=>{
                                                               return <div><strong>{key}</strong>{":" + staticWidgetTypes[key]}</div>
                                                               })}
                                </Column>

                                <Column>
                                                               <h3>Component Widget Types</h3>
                                                               <h6>Icon</h6>
                                                               <span className={"glyphicon " + iconClass}></span>

                                                               <h6>Image</h6>
                                                               <img src={imageUrl} width={100} height={100}/>

                                                               <h3>Widgets</h3>
                                                               {widgetContent}
                                </Column>
                                
                                <Column>
                                                               <h3>Dynamic Widget Types</h3>
                                                               <h6>Expression</h6>
                                                               <div style={{
                                                                    backgroundColor:priceColor
                                                                    }}>PriceColor
                                                                </div>
                                                                <div>
                                                                <h6>Text Template</h6>
                                                                    {textTemp}
                                                                </div>
                                                                <h6>Action</h6>
                                                                <button className={"btn btn-primary"} onClick={onChangePrice}>Change Price</button>
                                </Column>
                 </div>
            </div>







       

            
    </>
    );
}
