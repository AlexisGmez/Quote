

export const getRandom = ( array ) =>{
    const indexRand = Math.floor( array.length * Math.random());
    return array[indexRand];
}