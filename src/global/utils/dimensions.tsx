import { useEffect, useState } from "react";
import { Dimensions } from "react-native";




export function useDimesion(){

    const [landscape, setLandscape] = useState<boolean>(false);

    useEffect(()=>{
        isPortrait() ? setLandscape(false) : setLandscape(true)
    },[]);

    Dimensions.addEventListener('change', ()=>{
            isPortrait() ? setLandscape(false) : setLandscape(true)
    })

    const isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };
    
    const isLandscape = () => {
        const dim = Dimensions.get('screen');
        return dim.width >= dim.height;
    };
    

    return {
        landscape
    }
}
