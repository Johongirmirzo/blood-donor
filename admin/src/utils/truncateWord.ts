const truncateWord = (word: string, trunceOnWordLength: number = 50)=>{
    if(word.length >= trunceOnWordLength){
        return `${word.slice(0, trunceOnWordLength)}...`
    }
}
export default truncateWord