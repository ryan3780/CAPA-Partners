## CAPA-PARTNERS

<br/>
<img src="https://user-images.githubusercontent.com/45477679/148711166-618bacd7-3648-4d47-925f-a4e14d1aa5cc.gif">
<br/>  

## src 폴더 구조
```
src/
┣ components/                  # 컴포넌트 집합
┃ ┣ CardInfo.tsx               # 요청서 세부내용
┃ ┣ CardList.tsx               # 요청서
┃ ┣ Drawer.tsx                 # 햄버거 메뉴 아이콘 탭
┃ ┣ EmptyRequests.tsx          # 조건에 맞는 요청서가 없는 경우
┃ ┣ GridSelectAndSwitch.tsx    # 필터링 상위
┃ ┣ Header.tsx                 # 최상단 Bar
┃ ┣ Interface.tsx              # 필요 인터페이스 
┃ ┣ SelectBoxAndSwitch.tsx     # 필터링 로직
┃ ┗ Title.tsx                  # 상단 글귀
┣ img/                         # 필요 이미지 집합
┃ ┣ capa-p-b.png               
┃ ┗ capa-p.png
┣ App.css
┣ App.test.tsx
┣ App.tsx
┣ index.css
┣ index.tsx
```
## 확인 방법
### 1. git clone https://github.com/ryan3780/CAPA-Partners.git
### 2. cd CAPA-Partners
### 3. yarn install
### 4. json-server requests.json --p 4000
### 5. yarn start
