import { Global, Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config'
import { StorageModule } from "./storage/storage.module";

@Global()
@Module({
    imports: [
        StorageModule,
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true
        })
    ],
    providers: [],
    exports: []
})
export class CoreModule { }