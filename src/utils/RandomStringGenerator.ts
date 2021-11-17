function passwordStringGenerator (length:number):string {
    const alphaNumberic:string = "abcdEF^&*GHIjkLmNoPQrstUvWxyz0123456789@#$%"
    let result = <string>""
    
    for (let i:number = 0; i<length; i++) {
        result = result +  alphaNumberic.charAt(Math.ceil(Math.random() * alphaNumberic.length))
    }
     return result
}

export default passwordStringGenerator