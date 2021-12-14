function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'store',
      [
        {
          id: 1,
          user_id: 1,
          store_name: '떡볶이 묵을래?',
          store_image: 'client/src/img/dummy/store4.png',
          store_order_quantity: '17',
          store_description:
            '가성비 갑!!!! 코드여고 앞에서 20년간 자리를 지켜온 식당입니다.저렴한 가격에 김밥과 비빔밥 등 간단한 음식들을 즐길 수 있습니다. 대표 메뉴로는 매운 불닭 돈까스가 있습니다. 이 메뉴를 10분 안에 드시는 분께는 비빔밥 한그릇을 다음 방문 때 무료로 제공해드립니다.',
          store_address: '서울특별시 서초구 서초동 서운로 133 2층',
          store_category: '분식',
          store_lat: 37.496511,
          store_lng: 127.02483,
          business_hour: '10:00 ~ 21:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          user_id: 2,
          store_name: '틈새라면 천호점',
          store_image: 'client/src/img/dummy/원조할매국밥.png',
          store_order_quantity: '21',
          store_description:
            '명동 본점의 김복현 대표로부터 직접 배운 빨계떡 틈새라면의 천호점 입니다!. 끝장나는 매운맛의 본좌 빨계떡의 매력에 빠져 보세요 ',
          store_address: '서울특별시 강동구 천호3동 453-18',
          store_category: '분식',
          store_lat: 37.537996,
          store_lng: 127.127014,
          business_hour: '11:00 ~ 21:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          user_id: 3,
          store_name: '국수명가',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '분식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          user_id: 4,
          store_name: '짝꿍 떡볶이',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '분식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          user_id: 5,
          store_name: '웅이네 분식',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '분식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          user_id: 6,
          store_name: '정여사 손칼국수',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '분식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          user_id: 7,
          store_name: '9와 3/4번지 피자',
          store_image: 'client/src/img/dummy/원조할매국밥.png',
          store_order_quantity: '21',
          store_description:
            '남산 공원 근처에 위치한 이탈리안 피자집입니다. 나폴리 스타일의 화덕피자를 굽는 집으로 매장에 오시면 화덕을 직접 구경하실 수 있습니다. 대표메뉴로는 불고기 피자와 베지터리언 손님분들이 식사 가능한 베지터블 피자가 있습니다',
          store_address: '서울특별시 용산구 용산2가동 남산공원길 105 7층',
          store_category: '양식',
          store_lat: 37.550976488284654,
          store_lng: 126.99095582962613,
          business_hour: '11:00 ~ 23:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          user_id: 8,
          store_name: '샐러디',
          store_image: 'client/src/img/dummy/store1.png',
          store_order_quantity: '7',
          store_description:
            '강북에 8개의 매장을 갖추고 있는 샐러드 체인점입니다. 가장 유명한 메뉴는 아보카도 샐러드 입니다. 아보카도가 큼직하게 올라갔고, 병아리 콩과 각종 채소, 퀴노아까지 들어가있어 다이어트를 하셔서 식단 조절을 하셔야 하는 분들도 긴 포만감을 느끼실 수 있을겁니다',
          store_address: '서울특별시 마포구 합정동 396-14',
          store_category: '양식',
          store_lat: 37.543709,
          store_lng: 126.904409,
          business_hour: '11:30 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          user_id: 9,
          store_name: '프랑스파슷하',
          store_image: 'client/src/img/찌개.png',
          store_order_quantity: '5',
          store_description:
            '다채로운 생면 파스타의 세계에 오신 걸 환영합니다! 이탈리아 요리학교를 수료하고 미슐랭 3스타 레스토랑에서 경험을 쌓고오신 임현성 쉐프님께서 직접 만드신 파스타를 즐기실 수 있습니다. 현장방문은 이용이 힘드시고, 최소 3일전에 전화로 예약을 해주셔야 저희 레스토랑 음식들을 즐기실 수 있습니다. 불편을 드려 죄송합니다.',
          store_address: '서울특별시 중구 남대문로5가 581',
          store_category: '양식',
          store_lat: 37.559498,
          store_lng: 126.973151,
          business_hour: '11:30 ~ 21:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          user_id: 10,
          store_name: '크리스마스엔',
          store_image: 'client/src/img/찌개.png',
          store_order_quantity: '15',
          store_description:
            '최근 슬기로운 코딩생활 드라마에 나오는 맛집입니다. 트러플 뇨끼와 양고기 스테이크가 대표 메뉴입니다',
          store_address: '서울특별시 중구 남대문로5가 581',
          store_category: '양식',
          store_lat: 37.529628,
          store_lng: 126.967185,
          business_hour: '10:30 ~ 20:30',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 11,
          user_id: 11,
          store_name: 'da Pitta(다 피타)',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '양식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 12,
          user_id: 12,
          store_name: '리스토란떼 일 디토 서초',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '양식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 13,
          user_id: 13,
          store_name: '창신동 매운 족발 본점',
          store_image: 'client/src/img/dummy/원조할매국밥.png',
          store_order_quantity: '21',
          store_description:
            '자극적이지 않고 맛있는 매운맛이 담겨있는 창신동 매운족발입니다. 부드러운 돼지고기와 매콤쫄깃한 족발의 환상의 조합이 기다리고있습니다!  ',
          store_address: '서울특별시 종로구 종로51길',
          store_category: '야식',
          store_lat: 37.572984,
          store_lng: 127.011529,
          business_hour: '15:00 ~ 24:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 14,
          user_id: 14,
          store_name: '두도리포차',
          store_image: 'client/src/img/dummy/원조할매국밥.png',
          store_order_quantity: '21',
          store_description: '두도리포차 싼 야식  ',
          store_address: '서울특별시 종로구 종로51길',
          store_category: '야식',
          store_lat: 37.572984,
          store_lng: 127.011529,
          business_hour: '15:00 ~ 24:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 15,
          user_id: 15,
          store_name: '호돌이 야식',
          store_image: 'client/src/img/dummy/원조할매국밥.png',
          store_order_quantity: '21',
          store_description:
            '자극적이지 않고 맛있는 매운맛이 담겨있는 창신동 매운족발입니다. 부드러운 돼지고기와 매콤쫄깃한 족발의 환상의 조합이 기다리고있습니다!  ',
          store_address: '서울특별시 종로구 종로51길',
          store_category: '야식',
          store_lat: 37.572984,
          store_lng: 127.011529,
          business_hour: '15:00 ~ 24:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 16,
          user_id: 16,
          store_name: '춘하리 비어',
          store_image: 'client/src/img/dummy/원조할매국밥.png',
          store_order_quantity: '21',
          store_description:
            '자극적이지 않고 맛있는 매운맛이 담겨있는 창신동 매운족발입니다. 부드러운 돼지고기와 매콤쫄깃한 족발의 환상의 조합이 기다리고있습니다!  ',
          store_address: '서울특별시 종로구 종로51길',
          store_category: '야식',
          store_lat: 37.572984,
          store_lng: 127.011529,
          business_hour: '15:00 ~ 24:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 17,
          user_id: 17,
          store_name: '진노 치킨',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '야식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 18,
          user_id: 18,
          store_name: '배부른돼지',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '야식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 19,
          user_id: 19,
          store_name: '요술 단팥빵',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '단팥빵전문점',
          store_address: '',
          store_category: '베이커리',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 20,
          user_id: 20,
          store_name: '호두 카페',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '단팥빵전문점',
          store_address: '',
          store_category: '베이커리',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 21,
          user_id: 21,
          store_name: '카페24',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '직접구운 베이글과 커피 초 맛집',
          store_address: '',
          store_category: '베이커리',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 22,
          user_id: 22,
          store_name: '청춘꽈배기',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '꽈배기 전문점',
          store_address: '',
          store_category: '베이커리',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 23,
          user_id: 23,
          store_name: '식빵 초보24',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '각종 종류의 식빵 전문점',
          store_address: '',
          store_category: '베이커리',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 24,
          user_id: 24,
          store_name: '고전 빵집',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '소보루빵,생크림빵,녹두앙금빵등 옛날 빵의 정취를 느낄수있는 베이커리 ',
          store_address: '',
          store_category: '베이커리',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 25,
          user_id: 25,
          store_name: '진사오미',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '일식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 26,
          user_id: 26,
          store_name: '신유술해',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '일식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 27,
          user_id: 27,
          store_name: '가오리',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '일식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 28,
          user_id: 28,
          store_name: '하쿠나마타타',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '일식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 29,
          user_id: 29,
          store_name: '지브리',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '일식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 30,
          user_id: 30,
          store_name: '오타쿠',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '일식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 31,
          user_id: 31,
          store_name: '마라마라마라탕',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '중식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 32,
          user_id: 32,
          store_name: '생방송 중국이 좋다',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '중식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 33,
          user_id: 33,
          store_name: '여섯시내중국',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '중식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 34,
          user_id: 34,
          store_name: '탈주각',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '중식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 35,
          user_id: 35,
          store_name: '만취탕',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '중식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 36,
          user_id: 36,
          store_name: '화인루',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '중식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 37,
          user_id: 37,
          store_name: '패스트식스',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '패스트푸드',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 38,
          user_id: 38,
          store_name: '맥도날드덕',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '패스트푸드',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 39,
          user_id: 39,
          store_name: '저스트정크',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '패스트푸드',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 40,
          user_id: 40,
          store_name: '돈오',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '패스트푸드',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 41,
          user_id: 41,
          store_name: '마마이스',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '패스트푸드',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 42,
          user_id: 42,
          store_name: '유알낫얼론',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '패스트푸드',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 43,
          user_id: 43,
          store_name: '어머니죄송합니다',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '한식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 44,
          user_id: 44,
          store_name: '서초버드나무집',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '한식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 45,
          user_id: 45,
          store_name: '니먹고나먹고',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '한식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 46,
          user_id: 46,
          store_name: '먹을땐개도안건드려',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '한식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 47,
          user_id: 47,
          store_name: '앗추어탕',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '한식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 48,
          user_id: 48,
          store_name: '호오곡',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '한식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 49,
          user_id: 49,
          store_name: '명밥',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '한식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 50,
          user_id: 50,
          store_name: '기미상궁k',
          store_image: 'https://meal2sdk.s3.amazonaws.com/-001_12.jpg',
          store_order_quantity: randomIntFromInterval(1, 50),
          store_description: '',
          store_address: '',
          store_category: '한식',
          store_lat: (randomIntFromInterval(37450, 37570) / 1000).toFixed(3),
          store_lng: randomIntFromInterval(12690000, 12704000) / 100000,
          business_hour: '10:00 ~ 22:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('store', null, {});
  },
};
