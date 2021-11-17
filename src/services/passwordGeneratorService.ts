import generator from "./../utils/RandomStringGenerator";
class PasswordGenerator {
  async createPassword(website:string, length:number ) {
    const generatedString: string = generator(length);

    const result = {
        website,
        password: generatedString
    }
    
    return result;
  }
}

export default new PasswordGenerator();
