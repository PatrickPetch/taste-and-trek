import { Card, Typography, Spinner } from "@material-tailwind/react"
import { useState } from "react"


const Map = (props) => {
    // const res = search("Pop mart Jurong point")
    const {mapurl, loading} = props
    
    return (
        <Card className="mx-4 lg:mx-16 mb-20 justify-center items-center dark:bg-darky1">
            <Typography variant="h2" color="black" className="p-4 dark:text-white">Your Journey</Typography>
            {loading ?  <Spinner className="self-center size-12 mt-12 mb-24"/> : (mapurl == "" ? <Typography variant="h5" className="dark:text-darky3 text-center"> We apologize for the inconveniece. Our AI cannot find a possible route for you.</Typography>
            : <iframe
                className ="h-[36rem] w-full mb-12 px-12"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={mapurl}>
            </iframe>)}
        </Card>
    )
}
export default Map