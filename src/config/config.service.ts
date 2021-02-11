import * as fs from 'fs';
import { parse } from 'dotenv'
export class ConfigService {
    private readonly envConfig: { [key: string]: string }
    constructor() {
        const isDeveplomentEnv = process.env.NODE_ENV !== "production"
        if (isDeveplomentEnv) {
           const envFilePath = __dirname + '/../../.env';
            const existPath = fs.existsSync(envFilePath);

            if (!existPath) {
                console.log('.env file does not exists');
                process.exit(0);
                

            }

            this.envConfig = parse(fs.readFileSync(envFilePath));
        }else{
            
          
            this.envConfig ={
                PORT: process.env.PORT,
                HOST:process.env.HOST,
                USERNAME:process.env.USERNAME,
                PASSWORD:process.env.PASSWORD,
                DATABASE:process.env.DATABASE
            }

        }

    }

    get(key:string) :string{
         return this.envConfig[key];
    }
}