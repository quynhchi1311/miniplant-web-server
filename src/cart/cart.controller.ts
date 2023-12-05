import { Controller, Get, Post, Body, Session } from '@nestjs/common';
import { CartService } from './cart.service';
import { PushProductToCartDto } from './dto/push-product-to-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(
    @Session() session: Record<string, any>,
    @Body() pushProductToCartDto: PushProductToCartDto,
  ) {
    return this.cartService.pushProductToCart(session.id, pushProductToCartDto);
  }

  @Get()
  getCart(@Session() session: Record<string, any>) {
    return this.cartService.getCart(session.id);
  }
}
