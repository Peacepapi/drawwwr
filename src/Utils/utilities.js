export const compareColor = (obj1, obj2) => {
    if(obj1 && obj2)
        return obj1.red === obj2.red && 
                obj1.green === obj2.green && 
                obj1.blue === obj2.blue
    return false; 
}