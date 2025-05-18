import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['error', 'info'],
    });
  }

  async onModuleInit() {
    await this.$connect();

    const password = await this.hash.generateHash('123456');

    // await this.user.upsert({
    //   where: { email: 'email@email.com' },
    //   update: {},
    //   create: {
    //     email: 'email@email.com',
    //     name: 'name',
    //     password: password,
    //     phone: '0000000000',
    //     city: 'City',
    //     state: 'State',
    //     language: 'PORTUGUESE',
    //     role: RoleEnum.ADMIN,
    //     admin: {
    //       create: {
    //         id: 'admin',
    //       },
    //     },
    //   },
    // });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
