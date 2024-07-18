import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = props => (
  <ContentLoader 
    speed={1}
    width={200}
    height={370}
    viewBox="0 0 200 370"
    backgroundColor="#d9d9d9"
    foregroundColor="#c4c4c4"
    {...props}
  >
    <rect x="-106" y="237" rx="3" ry="3" width="410" height="16" /> 
    <rect x="-91" y="209" rx="3" ry="3" width="380" height="16" /> 
    <rect x="0" y="3" rx="0" ry="0" width="200" height="190" /> 
    <rect x="-3" y="341" rx="0" ry="0" width="202" height="21" /> 
    <rect x="71" y="282" rx="0" ry="0" width="51" height="20" />
  </ContentLoader>
)


export default MyLoader