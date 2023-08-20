
import backend from "@/apis/backend";


export const getServerSideProps = async (context: any) => {

    // backend.firebase.auth().onAuthStateChanged((user: any)
    let props: any = {

    }
    
    // let res1 = await backend.firebase.update_file(
    //     'hosting.json',
    //     'nextjs/assets/data/global',
    //     require('@/assets/data/global/hosting.json')
    // )

    // props.res1 = res1.data
    // console.log(res1)
    // console.log('\n')

    // let res2 = await backend.firebase.update_file(
    //     'jsonLd.json',
    //     'nextjs/assets/data/global',
    //     require('@/assets/data/global/jsonLd.json')
    // )

    // props.res2 = res2.data
    // console.log(res2)
    // console.log('\n')

    let res3 = await backend.firebase.update_file(
        'metaTags.json',
        'nextjs/assets/data/global',
        require('@/assets/data/global/metaTags.json')
    )

    // res2 = await backend.firebase.update_file(
    //     'page.json',
    //     'nextjs/assets/data/home',
    //     require('@/assets/data/home/page.json')
    // )

    // props.res4 = res2.data
    // console.log(res2)
    // console.log('\n')

    // res2 = await backend.firebase.update_file(
    //     'jsonLd.json',
    //     'nextjs/assets/data/home',
    //     require('@/assets/data/home/jsonLd.json')
    // )

    // props.res5 = res2.data
    // console.log(res2)
    // console.log('\n')

    let res6 = await backend.firebase.update_file(
        'metaTags.json',
        'nextjs/assets/data/home',
        require('@/assets/data/home/metaTags.json')
    )


    return {
        props
    }

}

export const Upload = (props: any) => {


    if (typeof window !== 'undefined') {
        console.log(props)
    }

    return (
        <div>
            <div>
                <h1>Upload</h1>
            </div>
{/* 
            <div>
                <p>Response 1</p>
                <h2>{JSON.stringify(props.res1)}</h2>
            </div>
            <div>
                <p>Response 2</p>
                <h2>{JSON.stringify(props.res2)}</h2>
            </div>
            <div>
                <p>Response 3</p>
                <h2>{JSON.stringify(props.res3)}</h2>
            </div>
            <div>
                <p>Response 4</p>
                <h2>{JSON.stringify(props.res4)}</h2>
            </div>
            <div>
                <p>Response 5</p>
                <h2>{JSON.stringify(props.res5)}</h2>
            </div>

                <p>Response 6</p>
                <h2>{JSON.stringify(props.res6)}</h2>
            </div>
*/}
        </div>
    )
}



export default Upload;