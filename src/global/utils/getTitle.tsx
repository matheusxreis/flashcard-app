export function getTitle(item:string){
    if(item?.length>8){
        return item.slice(0, 8) + "..."
    };
    return item;
};