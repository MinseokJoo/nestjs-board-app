import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    // @InjectRepository를 이용해서 이 서비스에서 BoardRepository를 이용한다해서 넣어줌
    @InjectRepository(BoardRepository) private boardRepository: BoardRepository,
  ) {}

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    console.log(this.boardRepository);
    return this.boardRepository.createBoard(createBoardDto);
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with id: ${id}`);
    }

    return found;
  }

  // 로컬 메모리 환경
  // /*타입을 정의해주면 좋은 이유?
  //   타입을 정의해주는 것은 선택사항입니다.
  //   하지만 이렇게 타입을 정의해주므로서 원하는 타입과 다른 코드를 사용할 시 에러가 발생합니다.
  //   그리고 코드를 읽는 입장에서 더 코드를 쉽게 이해하며 읽을 수 있습니다. (가독성 readable)*/

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

  // /*게시물 ID는 어떻게 처리해야할까?
  // ID는 모든 게시물에 유니크 해야합니다.
  // 그래서 만약 데이터베이스에 데이터를 넣어줄 때는 데이터베이스가 알아서 유니크한 값을 줍니다.
  // 하지만 현재는 데이터베이스를 사용하지 않기 때문에 임의로 유니크한 값을 줘야 합니다.
  // 이때 여러 방법을 쓸 수 있지만 uuid 모듈을 이용해서 유니크한 값을 주겠습니다.*/

  // createBoard(createBoardDto: CreateBoardDto): Board {
  //   const { title, description } = createBoardDto;

  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };

  //   this.boards.push(board);

  //   return board;
  // }

  // getBoardById(id: string): Board {
  //   const foundBoard = this.boards.find((board) => id === board.id);

  //   if (!foundBoard) {
  //     throw new NotFoundException(`Can't find Board with ${id}`);
  //   }

  //   return foundBoard;
  // }

  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id === found.id);
  // }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
