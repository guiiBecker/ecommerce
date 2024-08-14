import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication):Promise<never>{
    this.$on('beforeExit' as never, async () => {
      await app.close();
    });

    await new Promise<never>(()=> {})

    throw new Error('This code never be reached.')
  }
}