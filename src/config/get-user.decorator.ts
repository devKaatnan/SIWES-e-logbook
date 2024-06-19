import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/user/enitity/user.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
