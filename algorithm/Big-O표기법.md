## Big-O 표기법

### 주요 시간복잡도 & 성능
- O(1) > O(log n) > O(n) > O(n^2)(n제곱) > O(n!)(factorial)
- 시간복잡도 설명
  - O(1): 상수 시간 복잡도, 입력 크기와 관계없이 실행 시간이 일정합니다. 
  - O(log n): 로그 시간 복잡도, 입력 크기에 로그 선형적으로 비례하여 실행 시간이 증가합니다. 
  - O(n): 선형 시간 복잡도, 입력 크기에 비례하여 실행 시간이 증가합니다. 
  - O(n log n): 선형로그 시간 복잡도, 입력 크기에 로그 선형적으로 비례하여 실행 시간이 증가합니다. 
  - O(n^2), O(n^3), ...: 다항 시간 복잡도, 입력 크기의 거듭제곱에 비례하여 실행 시간이 증가합니다.
  - O(2^n): 지수 시간 복잡도, 입력 크기에 지수적으로 비례하여 실행 시간이 증가합니다.


- 자바스크립트 method들의 시간복잡도:
  - O(1) : push(), pop()
  - O(n) : shift(), unshift(), splice(), concat(), slice(), indexOf(), map(), filter(), reduce()
  - O(n log n): sort()

1. 인풋의 증가에 따른 연산 처리시간의 증가율을 예측하는 척도
2. 상수는 계산에서 제외
3. 최고차항만 신경쓰면 된다.
