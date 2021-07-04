import { Controller, Get, Post, Res, Render, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { LoginGuard } from './common/guards/login.guard';

@Controller()
export class AppController {
  @Post('/login')
  @UseGuards(LoginGuard)
  login(@Res() res: Response): void {
    return;
  }

  @Get('/')
  get() {
    return 'Hello Wrld';
  }
}
