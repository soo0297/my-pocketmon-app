# 포켓몬 도감 만들기

### 151종의 포켓몬 중 원하는 6마리 포켓몬을 선택하여 '나만의 포켓몬'을 골라라!

https://my-pockemon-app.vercel.app/

## 목표

#### 1. 페이지 라우팅 구현하기

: `react-router-dom`을 이용해 홈 페이지에서 도감 페이지로 이동, 도감 페이지에서 상세 페이지로 이동

#### 2. 도감페이지는 3개의 컴포넌트로 분리하기

: 반드시 `Dashboard`, `PokemonList`, `PokemonCard`로 컴포넌트를 구분하여 페이지를 구성

- 포켓몬 리스트 속 각 카드들은 '추가' 버튼을 가짐.
- 선택된 포켓몬이 대시보드에 표시되며, 이 카드들은 '삭제' 버튼을 가짐.
- 최대 6마리 포켓몬만 가질 수 있음.
- 각 포켓몬 카드를 클릭하면 상세 페이지로 이동

#### 3. 디테일 페이지

- `queryString`을 사용하여 포켓몬 ID를 받아 해당 포켓몬의 상세 정보 표시
- '뒤로 가기' 버튼을 통해 이전 페이지로 돌아갈 수 있도록 구현(리스트 페이지 데이터 유지시키는 선택사항 구현 부분은 하지 못함.)

#### 4. 알림 기능 구현

- 리스트에서 대시보드로 카드의 '추가'버튼을 클릭했을 때, 중복되면 "이미 등록된 포켓몬 입니다" 라고 alert 창 띄워주기
- 포켓몬카드를 6개까지 선택하고 나면, 그 이상은 "최대 6개까지만 선택할 수 있습니다." 라고 alert 창 띄워주기

#### 5. styled-components를 사용하여 포켓몬카드와 대시보드 꾸미기

: 조건부 스타일링을 시도해보려 했으나 못 함.

#### 6. Git 브랜치 전략 사용하기

1. `contextAPI` 브랜치 생성하여 contextAPI 사용해보기
2. `redux` 브랜치 생성하여 contextAPI 사용했던 것 지우고, 일반 redux로 리팩토링 하기
3. `RTK` 브랜치 생성하여 redux toolkit 사용하여 리팩토링 하기
