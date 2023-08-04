import React from 'react'

function useGetStaticPropertyTypes(props) {
    const {staticStr,staticMultilineStr,staticBool,staticInteger,staticdecimal:stDecimal,staticEnum}=props;
  return (
    {
        staticStr,
        staticMultilineStr,
        staticBool,
        staticInteger,
        staticdecimal:parseFloat(stDecimal),
        staticEnum
    }
  )
}

export default useGetStaticPropertyTypes