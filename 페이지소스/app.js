// 민원서비스 22건 JSON 데이터
const serviceData = [
  { "서비스ID": "S001", "서비스명": "주민등록등본 발급", "소관기관": "주민센터", "민원분야": "주민등록", "온라인처리": "가능", "처리기한일": 7, "수수료": 500 },
  { "서비스ID": "S002", "서비스명": "전입신고", "소관기관": "복지정책과", "민원분야": "주민등록", "온라인처리": "불가", "처리기한일": 1, "수수료": 0 },
  { "서비스ID": "S003", "서비스명": "인감증명 발급", "소관기관": "복지정책과", "민원분야": "주민등록", "온라인처리": "가능", "처리기한일": 1, "수수료": 0 },
  { "서비스ID": "S004", "서비스명": "주민등록증 재발급", "소관기관": "건축과", "민원분야": "주민등록", "온라인처리": "가능", "처리기한일": 0, "수수료": 0 },
  { "서비스ID": "S005", "서비스명": "건축물대장 발급", "소관기관": "구청 민원봉사과", "민원분야": "건축", "온라인처리": "불가", "처리기한일": 0, "수수료": 1000 },
  { "서비스ID": "S006", "서비스명": "건축허가 신청", "소관기관": "건축과", "민원분야": "건축", "온라인처리": "불가", "처리기한일": 1, "수수료": 2000 },
  { "서비스ID": "S007", "서비스명": "용도변경 신고", "소관기관": "시청 민원과", "민원분야": "건축", "온라인처리": "불가", "처리기한일": 0, "수수료": 0 },
  { "서비스ID": "S008", "서비스명": "지방세 납부확인서", "소관기관": "건축과", "민원분야": "세무", "온라인처리": "가능", "처리기한일": 1, "수수료": 1000 },
  { "서비스ID": "S009", "서비스명": "취득세 신고", "소관기관": "교통행정과", "민원분야": "세무", "온라인처리": "가능", "처리기한일": 0, "수수료": 0 },
  { "서비스ID": "S010", "서비스명": "재산세 조회", "소관기관": "교통행정과", "민원분야": "세무", "온라인처리": "가능", "처리기한일": 3, "수수료": 0 },
  { "서비스ID": "S011", "서비스명": "기초연금 신청", "소관기관": "건축과", "민원분야": "복지", "온라인처리": "가능", "처리기한일": 7, "수수료": 500 },
  { "서비스ID": "S012", "서비스명": "복지급여 조회", "소관기관": "시청 민원과", "민원분야": "복지", "온라인처리": "가능", "처리기한일": 14, "수수료": 5000 },
  { "서비스ID": "S013", "서비스명": "장애인 등록", "소관기관": "주민센터", "민원분야": "복지", "온라인처리": "가능", "처리기한일": 5, "수수료": 0 },
  { "서비스ID": "S014", "서비스명": "자동차 등록", "소관기관": "주민센터", "민원분야": "교통", "온라인처리": "가능", "처리기한일": 1, "수수료": 5000 },
  { "서비스ID": "S015", "서비스명": "운전면허 갱신", "소관기관": "교통행정과", "민원분야": "교통", "온라인처리": "불가", "처리기한일": 1, "수수료": 0 },
  { "서비스ID": "S016", "서비스명": "주정차 위반 조회", "소관기관": "주민센터", "민원분야": "교통", "온라인처리": "가능", "처리기한일": 7, "수수료": 1000 },
  { "서비스ID": "S017", "서비스명": "배출시설 신고", "소관기관": "주민센터", "민원분야": "환경", "온라인처리": "가능", "처리기한일": 1, "수수료": 0 },
  { "서비스ID": "S018", "서비스명": "폐기물 처리 신청", "소관기관": "시청 민원과", "민원분야": "환경", "온라인처리": "가능", "처리기한일": 14, "수수료": 5000 },
  { "서비스ID": "S019", "서비스명": "식품영업 신고", "소관기관": "건축과", "민원분야": "위생", "온라인처리": "가능", "처리기한일": 3, "수수료": 2000 },
  { "서비스ID": "S020", "서비스명": "위생업소 조회", "소관기관": "시청 민원과", "민원분야": "위생", "온라인처리": "불가", "처리기한일": 7, "수수료": 500 },
  { "서비스ID": "S021", "서비스명": "여권 발급 신청", "소관기관": "건축과", "민원분야": "여권", "온라인처리": "가능", "처리기한일": 7, "수수료": 1000 },
  { "서비스ID": "S022", "서비스명": "여권 재발급", "소관기관": "교통행정과", "민원분야": "여권", "온라인처리": "가능", "처리기한일": 1, "수수료": 1000 }
];

// DOM 요소
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const serviceList = document.getElementById('serviceList');
const countElement = document.getElementById('count');

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    initCategoryOptions();
    renderServices(serviceData);

    // 이벤트 리스너 등록
    searchInput.addEventListener('input', filterData);
    categorySelect.addEventListener('change', filterData);
});

// 민원분야 드롭다운 옵션 동적 생성
function initCategoryOptions() {
    const categories = [...new Set(serviceData.map(item => item.민원분야))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// 필터링 기능 (키워드 검색 & 민원분야 선택 동시 적용)
function filterData() {
    const keyword = searchInput.value.trim().toLowerCase();
    const selectedCategory = categorySelect.value;

    const filtered = serviceData.filter(item => {
        // 서비스명 키워드 조건
        const matchesKeyword = item.서비스명.toLowerCase().includes(keyword);
        // 민원분야 조건
        const matchesCategory = selectedCategory === '전체' || item.민원분야 === selectedCategory;

        return matchesKeyword && matchesCategory;
    });

    renderServices(filtered);
}

// 화면 출력 함수
function renderServices(data) {
    // 검색 결과 수 업데이트
    countElement.textContent = data.length;

    // 결과 목록 초기화
    serviceList.innerHTML = '';

    if (data.length === 0) {
        serviceList.innerHTML = `<div class="no-result">검색 결과가 없습니다.</div>`;
        return;
    }

    // 카드 생성 및 출력
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const isOnline = item.온라인처리 === '가능';
        const onlineBadgeClass = isOnline ? 'possible' : 'impossible';
        const feeText = item.수수료 === 0 ? '무료' : `${item.수수료.toLocaleString()}원`;
        const periodText = item.처리기한일 === 0 ? '즉시' : `${item.처리기한일}일`;

        card.innerHTML = `
            <div class="card-header">
                <span class="card-title">${item.서비스명}</span>
                <span class="badge-category">${item.민원분야}</span>
            </div>
            <div class="card-body">
                <div class="info-item">소관기관: <span>${item.소관기관}</span></div>
                <div class="info-item">온라인처리: <span class="badge-online ${onlineBadgeClass}">${item.온라인처리}</span></div>
                <div class="info-item">처리기한: <span>${periodText}</span></div>
                <div class="info-item">수수료: <span>${feeText}</span></div>
            </div>
        `;

        serviceList.appendChild(card);
    });
}