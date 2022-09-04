/**
 * Big O
 * 
 * Insertion
 * O(1)
 * 
 * Deletion
 * O(1)
 * 
 * Search
 * O(n)
 * 
 */


class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // 처음에 데이터가 없으면 null
        this.size = 0; // 초기 사이즈 0으로 초기화
    }

    // 첫번째 삽입
    insertFirst(data){
        this.head = new Node(data, this.head) // head 에 새로운 node 가 들어가고 기존의 헤드는 next로
        this.size++;
    }

    // 마지막 삽입
    insertLast(data){
        let node = new Node(data);
        let cur;

        if(!this.head) {
            this.head = node;
        }else {
            cur = this.head;

            while(cur.next) { //this.head에 next가 있다면 즉, next가 null이아니라면
                cur = cur.next; // current는 current.next가 되고
            }

            cur.next = node; //결국 current.next가 새로넣은 node가 된다?
        }
        this.size++; // 크기 1 증가
    }

    // 중간 삽입

    insertAt(data, index) {
        if(index > 0 && index > this.size) return;

        // first index
        if(index == 0) {
            this.head = new Node(data,this.head); // index가 0일때 head에 노드 추가 후 한칸 씩 뒤로 미룸
            this.size++;
            return;
        }

        const node = new Node(data);
        let cur,prev;

        // Set cur first
        cur = this.head;
        let count = 0;

        while(count < index) {
            prev = cur;
            count++;
            cur = cur.next;
        }

        node.next = cur;
        prev.next = node;

        this.size++;
    }

    getAt(index) {
        let cur = this.head;
        let count = 0;

        while(cur) {
            //해당 data의 값을 가져오기 위해 index와 값이 같아질때까지 loop한다.
            if (count == index) {
             console.log(cur.data);
            }
            count++;
            cur = cur.next;
            }
            return null;
    }
    
    //삭제
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
          }

        let current = this.head; //current는 현재 첫번째 노드임
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
        this.head = current.next;
        } else {
        //loop를 통해 해당 index의 연결고리를 끊는다.
        while (count < index) {
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        }

        this.size--;
    
    }

      // Clear list ~ 메모리자체에는 데이터가 남아있겠지만 보여주기 위해서 func 만들었다.
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // Print list data ~ data값만 따로
  printListData() {
    let current = this.head; // 현재 노드를 나타냄

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const linkedList = new LinkedList();
linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.insertAt(500, 1)

linkedList.removeAt(2)

linkedList.printListData();

linkedList.getAt(2);

//linkedList.clearList();

//console.log(linkedList)

