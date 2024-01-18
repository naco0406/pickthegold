### 개요

---

<aside>
💡 Pick The Gold !

</aside>

  겨울학기 몰입캠프가 진행하는 동안, 매 주 산출물들을 한 눈에 확인하고 그 중에서 금주의 픽이 될 것 같은 프로젝트에 배팅을 할 수 있는 웹사이트이다. 프로젝트 별 배당률이 실시간으로 업데이트되고, 현재 배당률의 순위까지 볼 수 있다. 또한 배팅 마감시간이 지난 후에는 어떤 사용자가 금주의 픽 배팅에 성공하였는지, 실패하였는지 팝업창을 통하여 알 수 있다.

### 팀원

---

[정지연](https://www.notion.so/d606c2b8d0b243f0bcd2786496832575?pvs=21) 

[sanananan3 - Repositories](https://github.com/sanananan3?tab=repositories)

[고영](https://www.notion.so/aa3aee7d632d47698efc369b66218320?pvs=21)

[naco0406 - Overview](https://github.com/naco0406)

### 개발 환경

---

Language: TypeScript

FrontEnd: React, Next.js

DataBase : MySQL

Server: Node.js

### **주요 기능**

---

<aside>
💡 **1.** **회원가입 & 로그인**

</aside>

[User](https://www.notion.so/d458fc5bd66e4cfdb87026249029b9f4?pvs=21)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/2f4dd968-c26d-45cb-9b0d-eb4e637fef9d/Untitled.png)

 웹사이트가 로딩이 되면 처음으로 나타나는 메인 페이지에서 우측 상단을 보면 로그인 버튼이 존재한다. 

해당 버튼을 누르게 되면 로그인 페이지로 라우팅이 된다. 소셜 로그인은 Google, Github, 카카오, 네이버 총 4가지 종류로 구성하였다. 첫 로그인을 완료한다면 User 테이블에 balance는 default 값으로 100000 포인트를 부여하게 되고, email은 소셜 로그인을 진행하였던 이메일로 Insert 된다.  

![스크린샷 2024-01-17 193959.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/437a58d0-9f88-4451-a9be-6089d46a2af3/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-17_193959.png)

 

4가지의 로그인 중 Google 계정으로 로그인을 선택하면 자신에게 연동된 Google 계정들이 나오게 된다. 

![스크린샷 2024-01-17 194033.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/0d853efb-f077-4795-bae0-945a479298fd/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-17_194033.png)

Google 소셜 로그인에 성공하게 되면 배팅에 필요한 기본적인 추가 입력사항들이 있는 페이지가 뜨게 된다. 해당 정보들을 입력한 후 가입하기 버튼을 누르면 아래와 같이 로그인 버튼이 내 정보 버튼으로 바뀌게 되고, 현재 몰입캠프의 주차 정보와 남은 자산 정보가 뜨게 된다. 로그아웃 버튼을 누르게 되면 아래에서 볼 수 있는 메인 페이지로 돌아가게 된다.

![스크린샷 2024-01-17 194106.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/bfb9263f-6f3e-4f94-8c94-137930c46eb7/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-17_194106.png)

---

<aside>
💡 **2.** **메인 페이지**

</aside>

---

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/eec0ed24-e425-4d6d-ac61-671c3bf2974d/Untitled.png)

로그인을 하기 전, 웹페이지에 들어가게 되면 제일 처음으로 보이게 되는 메인 페이지이다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/d90b169d-85a6-43f1-b942-c91a1605ee1f/Untitled.png)

메인 홈에서 배팅하러 가기 버튼을 누르게 되면 우리반 금픽 페이지로 넘어가게 된다. 

<aside>
💡 **3. 우리반 금픽 후보**

</aside>

---

 해당 우리반 금픽 페이지에서는 현재 시간을 기준으로 이번 주에 해당하는 프로젝트들의 기본적인 정보들이 간략하게 뜬다. 배팅의 편의성을 위하여 README 파일을 GitHub API를 통하여 가져온 후, JSON 형태로 반환하여 카드 형태로 띄웠다. 카드 안에는 프로젝트 이름, 간략한 소개, 해당 프로젝트에 배팅 시 배팅금액을 입력할 수 있는 텍스트창, 배팅 버튼이 존재한다. 또한 해당 카드를 선택하게 되면 

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/7fc4a7f2-0206-41d5-96cf-3ed1d12d5c4f/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/fd14f360-e2b9-435b-85ee-a82ec0ad22f6/Untitled.png)

![프로젝트 이름 클릭 시 뜨게 되는 자세한 README 파일 창](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/0f0543e0-4d9a-4b87-8afa-0d8afec66146/Untitled.png)

프로젝트 이름 클릭 시 뜨게 되는 자세한 README 파일 창

<aside>
💡 **4. 지난주 금픽**

</aside>

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/4d58e836-15e3-40a5-b7e8-edf23978802a/Untitled.png)

지난주 금픽 탭에서는 지난 주에 금주의 픽으로 선별된 프로젝트들을 분반별로 나누어서 볼 수 있다. 

 각 프로젝트의 제목과 메인 이미지, 간략한 소개글을 볼 수 있으며, 프로젝트 보러가기 버튼을 누르게 되면 깃허브 링크와 연동이 되어 자세한 코드와 README 파일을 확인 할 수 있다. 

  

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/c63c1754-e8c2-4386-8266-0a187d0b988b/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/77c38ff9-9fa3-4d76-bc01-df453fb1a0cb/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/f97867a1-2b02-4f1f-94b4-ed20277f632e/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/45a37784-3cc0-49b1-8ec3-ec52f5b1b419/Untitled.png)

<aside>
💡 **5. 현재 배당률**

</aside>

 또한, 메인 페이지 하단으로 스크롤을 내리게 되면 현재 실시간 배당률을 확인할 수 있다. 

 실시간 배당률을 반환하기 위하여 Bet 테이블과 Odds 테이블을 이용하였다. 

 현재 가장 유력한 금주의 픽 프로젝트 Top3 가 반환되며, 실제 사용자들이 배팅한 금액을 기반으로 배당률이 계산되어 나타난다. 또한 해당 카드에는 Top3 프로젝트의 제목과 팀원, 간략한 소개 및 깃허브 링크 연동 버튼이 존재한다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/0745a581-fb29-453f-97f1-0eab029d9093/Untitled.png)

![Top3 프로젝트 뿐만 아니라 모든 프로젝트에 대한 실시간 배당률도 확인이 가능 ](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/aa830914-f81d-4347-855e-1cdecf447930/Untitled.png)

Top3 프로젝트 뿐만 아니라 모든 프로젝트에 대한 실시간 배당률도 확인이 가능 

<aside>
💡 **5. 배팅 및 결과**

</aside>

![스크린샷 2024-01-17 194145.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/01f568ef-7df1-476d-80af-ff2a840b82f5/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-17_194145.png)

![스크린샷 2024-01-17 194151.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/9018161c-390b-4047-b2b0-ddaeb717c3f5/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-17_194151.png)

![스크린샷 2024-01-17 194157.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/8b9b87ea-acc8-4521-b8ea-a9de2d464af1/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-17_194157.png)

현재 로그인한 계정으로 금주의 픽으로 유력하게 예상이 되는 WashHub 프로젝트에 1000원을 배팅하였다. 

배팅 직후에 배팅 금액을 수정할 수 없도록 배팅 버튼이 비활성화되며, 내 정보에 존재하는 남은 자산 정보가 현재 배팅한 금액을 차감하여 업데이트된다. 

![스크린샷 2024-01-17 194247.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/4d50425a-37b9-49df-a62f-43c6ef6fcc14/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-01-17_194247.png)

배팅 마감시간이 지나면, 전체 사용자의 배팅 결과가 웹사이트의 팝업창으로 뜨게 된다. 현재 로그인한 ‘사나야’ 계정은 배팅에 실패하였기 때문에 1000원이 차감된 상태로 잔액이 유지되었다. 그러나 다른 사용자들 중 배팅에 성공한 사용자들은 기본 금액인 100000원에서 balance를 추가로 획득하여 잔액이 100000원을 넘게 되었다.
