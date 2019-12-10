인스타그래 클론
===
### 프로젝트 계기
~~~
Python에 대해 더욱 알고싶어 프로젝트를 진행하려했으나 혼자 하는 것 보다는 강의를 통하여 정확하게 프로젝트를 구성하고 잘 몰랐던 부분들을 채워나가고 싶었다.
~~~

### 1. 프론트

### 2. 백엔드

### 2-1 백엔드 가상환경
+ 구름 IDE 사용(먼저 로컬에서 실행 후 ide에 파일 업로드)

### 2-2 장고 셋팅
> mkdir instaclone

> pip3 install virtualenv

> virtualenv venv

> source venv/bin/activate // 가상환경 진입

> pip install django==2.1 // 장고 2.1ver 설치

> django-admin startproject config . // 장고 설치 후 최초 실행 

~~~
config 파일은 db 설정 등 장고 환경을 구성하는 데에 중요한 설정
~~~

> python manage.py migrate
~~~
=> db.sqlite3: 장고에서 기본적으로 제공해주는 DB
* 장고를 설치하면 db가 자동으로 설치 !
~~~

> python manage.py runserver 0:80 // 장고 스타트 해보기

> 프로젝트 -> 속성 -> 실행 URL과 포트 // 에러 발생

> settings.py ALLOWED_HOSTS = ['*']  // 변경


### 2-3 postgresql 셋팅

로컬환경 & ide 환경

> brew update & apt-get update

> brew install postgresql & apt-get install postgresql

> postgres -D /usr/local/var/postgres & service postgresql start

> ps -ef | grep postres

슈퍼유저를 자동으로 하나 생성한다.

> su - postgres

#### 2-4 앱 생성

> django-admin startapp accounts

> setting.py 파일 수정

#### 2-5 이미지처리 모듈 설치

> pip install pillow
> pip install pilkit
> pip install psycopg2-binary

---

### &#127969; 진행상황
[x] 프런트 화면 ( 2019. 11. 25 ~ 2019. 12. 01)

[ ] 백엔드 환경 구성 ( 2019. 12. 01 ~ )
    - 장고 셋팅
    - postgresql 설치

---
### &#128035; 발생했던 귀여운 문제점들

1. 상황: 좋아요버튼 및 버튼의 동작들을 구성하는데,  window.addEventListener('click', delegationFunc) ; 을 window 말고 delegation으로 변경하는데서 
"main.js:93 Uncaught TypeError: Cannot read property 'addEventListener' of null" 에러 발생

+ 해결방법 
  - 에러는 발생하지 않지만 css 적용이 바뀌지 않음
    ~~~
    if (delegation) {
        delegation.addEventListener('click', delegationFunc);
    }
    ~~~

  - const delegation = document.querySelector('.contents_box') 클래스 '.'을 붙이지 않아서 발생함.