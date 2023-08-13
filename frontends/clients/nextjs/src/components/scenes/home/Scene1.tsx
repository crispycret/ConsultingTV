import { useEffect } from "react";
import { useMobile } from "eternite/hooks";

import { Row } from "@/lib/bootstrap";

import { Spacer } from "@/components/layout";
import { SimpleScene, Detail } from "@/components/basic/common"
// import SimpleScene from "@/components/basic/common/SimpleScene";
// import Detail from "@/components/basic/common/Detail";


export const Scene1 = (entity: any) => {

    const { mobile } = useMobile()

    // Build the background image url from the entity data if it exists, otherwise use no image.
    const bgImage = entity ? require(`@/assets/images/${entity.bgImage}`).default.src : ''

    return (
        // <SimpleScene title={ entity ? entity.title : 'Sample Title'  } bgImage={ bgImageSrc }>
        <SimpleScene props={ {...entity, test:'test', bgImage } }>
            <Row className='text-center my-auto'>
                {entity && entity.content && entity.content.map((content: any, index: number) => {
                    return (
                        <div key={index}>
                            <Detail title={content.title } descriptions={content.descriptions } />
                            
                            {/* Add extra spacing between <Detail/> tags. */}
                            {index < entity.content.length && <Spacer size={5} />}
                        </div>
                    )}
                )}
            </Row>
        </SimpleScene>

    )
}
