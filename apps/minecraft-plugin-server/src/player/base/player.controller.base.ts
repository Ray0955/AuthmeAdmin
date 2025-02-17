/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PlayerService } from "../player.service";
import { PlayerCreateInput } from "./PlayerCreateInput";
import { Player } from "./Player";
import { PlayerFindManyArgs } from "./PlayerFindManyArgs";
import { PlayerWhereUniqueInput } from "./PlayerWhereUniqueInput";
import { PlayerUpdateInput } from "./PlayerUpdateInput";
import { PasswordFindManyArgs } from "../../password/base/PasswordFindManyArgs";
import { Password } from "../../password/base/Password";
import { PasswordWhereUniqueInput } from "../../password/base/PasswordWhereUniqueInput";
import { PlayerPasswordDto } from "../PlayerPasswordDto";

export class PlayerControllerBase {
  constructor(protected readonly service: PlayerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Player })
  async createPlayer(@common.Body() data: PlayerCreateInput): Promise<Player> {
    return await this.service.createPlayer({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        username: true,
        hasPermission: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Player] })
  @ApiNestedQuery(PlayerFindManyArgs)
  async players(@common.Req() request: Request): Promise<Player[]> {
    const args = plainToClass(PlayerFindManyArgs, request.query);
    return this.service.players({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        username: true,
        hasPermission: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async player(
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Player | null> {
    const result = await this.service.player({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        username: true,
        hasPermission: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePlayer(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() data: PlayerUpdateInput
  ): Promise<Player | null> {
    try {
      return await this.service.updatePlayer({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          username: true,
          hasPermission: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePlayer(
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Player | null> {
    try {
      return await this.service.deletePlayer({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          username: true,
          hasPermission: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/passwords")
  @ApiNestedQuery(PasswordFindManyArgs)
  async findPasswords(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Password[]> {
    const query = plainToClass(PasswordFindManyArgs, request.query);
    const results = await this.service.findPasswords(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        value: true,

        player: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/passwords")
  async connectPasswords(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PasswordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      passwords: {
        connect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/passwords")
  async updatePasswords(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PasswordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      passwords: {
        set: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/passwords")
  async disconnectPasswords(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PasswordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      passwords: {
        disconnect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/generate-password")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GeneratePlayerPassword(
    @common.Body()
    body: PlayerPasswordDto
  ): Promise<string> {
    return this.service.GeneratePlayerPassword(body);
  }

  @common.Post("/verify-password")
  @swagger.ApiOkResponse({
    type: Boolean,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async VerifyPlayerPassword(
    @common.Body()
    body: PlayerPasswordDto
  ): Promise<boolean> {
    return this.service.VerifyPlayerPassword(body);
  }
}
