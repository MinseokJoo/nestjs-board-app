// 모델을 정의하기 위해서는 Class를 이용하거나 Interface를 이용하면 된다.
// interface => 변수의 타입만을 체크합니다.
// classes => 변수의 타입도 체크하고 인스턴스 또한 생성할 수 있습니다.
// board의 구조만 정의하기 위해 interface를 사용할게용...
// board status : 공개 게시물인지, 비공개 게시물인지의 상태 이외에는 나오면 안되기 때문에
// 두가지의 상태만 나올 수 있게 하기 위해서 enumeration을 이용하겠습니다.

// export interface Board {
//   id: string;
//   title: string;
//   description: string;
//   status: BoardStatus;
// }

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
