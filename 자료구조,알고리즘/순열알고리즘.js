/**
 * 순열 알고리즘이란?
수학에서 순열(Permutation) 또는 치환은 순서가 부여된 임의의 집합을 다른 순서로 뒤섞는 연산이다. 즉, 순열은 정의역과 공역이 같은 일대일 대응이다. n개의 원소의 순서를 뒤섞는 순열의 개수는 n의 계승 n!와 같다. 즉, n 이하의 양의 정수들을 곱한 값이다.
-위키피디아

공식(nPr)
서로 다른 n개중에 r개를 선택하는 경우의 수

모든 경우의 수를 계산하는 완전 탐색에서 사용하는 알고리즘입니다.
순서 n개에 대한 모든 경우의 수를 구하는 것은 n!로 구하기 쉽습니다.

재귀 로 구할 수 있다.

perm(int[] arr, int depth, int n, int k)

arr - 데이터를 교환되고 있는 배열
depth - 위의 트리 구조에서 어떤 깊이에서 교환작업을 하고 잇는지에 대한 변수
n - 배열안에 들어있는 숫자로 고정값으로 위의 사진에서는 3으로 고정되어 있다.
k - 몇개를 뽑아내서 순열을 만들것인가이다.
현재 같은 경우는 3개를 뽑아서 3개 모두 사용해 순열하기 때문에 3으로 고정되어 있다.
*/

