import { useEffect } from "react";
import { useMobile } from "eternite/hooks";
import { Col } from "@/lib/bootstrap"



export const Detail = ({title, descriptions}: any) => {

    // TODO: Abstract this into a component and use it in the other pages. 
    // TODO: Add a title prop to the component and use it in the other pages.
    // TODO: Add a descriptions prop to the component and use it in the other pages.
    
    let mobile = useMobile();


    return (
        <>
            {/* Title -> Repackage as a component. DetailTitle or InfoTitle or something similar */}
            <Col md={12} className='my-auto mx-auto'>
                <h3 className='mt-1 mb-3 display-5'>{title}</h3>
            </Col>
            <div>
                {descriptions.map((description: any, index: number) => {
                    return (
                        <div key={index} className={`${mobile ? 'my-3' : 'my-5'}`}>
                            <strong className={`${mobile ? 'h5': 'h4'}`}>{description[0]}</strong>
                            <p>
                                {description[1]}
                            </p>
                        </div>
                    )}
                )}
            </div>
        </>
    )
}



export default Detail;
