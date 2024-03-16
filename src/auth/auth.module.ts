import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { CustomersModule } from "src/customers/customers.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    CustomersModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || "secret",
      signOptions: {
        expiresIn: "24h",
      },
    }),
  ],
})
export class AuthModule {}
