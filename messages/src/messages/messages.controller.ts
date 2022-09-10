import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {

    }

    @Post()
    createMessage(@Body() body: any) {
        return body
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return id
    }
}
