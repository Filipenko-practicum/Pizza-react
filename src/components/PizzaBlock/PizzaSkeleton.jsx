import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className='pizzaBlock'
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="124" cy="124" r="124" />
        <rect x="0" y="267" rx="15" ry="15" width="280" height="29" />
        <rect x="0" y="316" rx="15" ry="15" width="280" height="78" />
        <rect x="2" y="418" rx="15" ry="15" width="111" height="41" />
        <rect x="165" y="418" rx="15" ry="15" width="105" height="38" />
    </ContentLoader>
)

export default Skeleton

